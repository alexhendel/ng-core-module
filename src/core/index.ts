import { Rule, SchematicContext, Tree, apply, template, mergeWith, url } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { join, normalize } from 'path';

import { Schema } from './schema';


export async function setupOptions(host: Tree, options: any): Promise<Tree> {
  const workspace = await getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects.get(options.project);

  if (project) {
    options.path = join(normalize(project.root), 'src');
  }

  return host;
}

export function coreModule(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplate = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings
      }),
    ]);

    return mergeWith(sourceParametrizedTemplate)(tree, _context);
  };
}
