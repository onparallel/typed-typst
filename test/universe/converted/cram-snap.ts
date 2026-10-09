// Converted from test/universe/corpus/cram-snap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  m,
  page,
  path,
  pt,
  raw,
  set,
  show,
  space,
  strong,
  table,
  text,
} from '../../../src/index.ts'

export default () => {
  const cramSnap = external('cram-snap')
  const theader = define('theader').pos('arg1', T.content).returns(T.any).external()
  const cramSnap_with = define('with')
    .named('icon', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(cramSnap)
  return doc(
    importPackage('@preview/cram-snap:0.2.2', [cramSnap, theader]),
    m.lines(set(page, { paper: 'a4', flipped: true, margin: cm(1) }), set(text, { font: 'Arial', size: pt(11) })),
    show(cramSnap_with({ title: inline`Git Cheatsheet`, icon: image(path('git-icon.svg')) })),
    inline(
      table(
        theader(inline`Adding changes`),
        inline(raw('git add -u <path>')),
        inline`add all tracked files to the ${strong(inline`staging area`)}`,
        inline(raw('git add -p <path>')),
        inline`interactively pick which files to ${strong(inline`stage`)}`,
      ),
    ),
    inline(
      table(
        theader(inline`Storing changes`),
        inline(raw('git stash [push] [path]')),
        inline`put current changes in the ${strong(inline`working tree`)} into ${strong(inline`stash`)} for
later use`,
        inline(raw('git stash pop')),
        inline`apply stored ${strong(inline`stash`)} content into ${strong(inline`working tree`)}, and clear
${strong(inline`stash`)}`,
        inline(raw('git stash drop')),
        inline`delete a specific ${strong(inline`stash`)} from all the previous ${strong(inline`stashes`)}`,
      ),
    ),
    inline(
      table(
        theader(inline`Inspecting diffs`),
        inline(raw('git diff [path]')),
        inline`show changes between ${strong(inline`working tree`)} and ${strong(inline`staging area`)}`,
        inline(raw('git diff --cached/--staged [path]')),
        inline`show any changes between the ${strong(inline`staging area`)} and the ${strong(inline`repository`)}`,
        inline(raw('git diff > file.patch')),
        inline`generate a patch file for current changes`,
      ),
    ),
    inline(
      table(
        theader(inline`Reverting changes`),
        inline(raw('git rebase')),
        inline`rebase the current branch on top of another specified branch`,
        inline(raw('git rebase -i [commit sha]')),
        inline`start an interactive rebase`,
        inline(raw('git revert [commit sha]')),
        inline`Create a new commit, reverting changes from the specified commit. It generates an ${strong(inline`inversion`)}
of changes.`,
        inline(raw('git checkout <path>')),
        inline`discard changes in the ${strong(inline`working tree`)}`,
        inline(raw('git restore [-W/--worktree] <path>')),
        inline`discard changes in the ${strong(inline`working tree`)}`,
        inline(raw('git restore -S/--staged <path>')),
        inline`remove a file from a ${strong(inline`staging area`)}`,
        inline(raw('git restore -SW <path>')),
        inline`discard changes in the ${strong(inline`working tree`)} and to the ${strong(inline`staged`)}
files`,
        inline(raw('git reset <path>')),
        inline`remove a file from the ${strong(inline`staging area`)}`,
        inline(raw('git reset [mode] HEAD^')),
        blocks(
          m.lines(
            inline`remove the latest ${strong(inline`commit`)} from the current branch and:`,
            m.list(
              m.item([
                raw('--soft'),
                space,
                '- keep file changes in the',
                space,
                strong(inline`working tree`),
                space,
                'and',
                space,
                strong(inline`stage`),
                space,
                'them;',
              ]),
              m.item([raw('--mixed'), space, '- keep file changes;']),
              m.item([
                raw('--keep'),
                space,
                '- reset only files which are different between current',
                space,
                raw('HEAD'),
                space,
                'and the last commit',
              ]),
              m.item([raw('--hard'), space, '- do', space, strong(inline`not`), space, 'keep file changes']),
            ),
          ),
        ),
      ),
    ),
    inline(
      table(
        theader(inline`Tagging commits`),
        inline(raw('git tag')),
        inline`list all tags`,
        inline(raw('git tag <name> [commit sha]')),
        inline`create a tag reference named ${raw('name')} for the current or specific commit`,
        inline(raw('git tag -a <name> -m <message>')),
        inline`create an annotated tag with the given message`,
        inline(raw('git tag -d <name>')),
        inline`delete the tag with the given name`,
      ),
    ),
    inline(
      table(
        theader(inline`Synchronizing repositories`),
        inline(raw('git fetch [remote]')),
        inline`fetch changes from the ${strong(inline`remote`)}, but not update tracking branches`,
        inline(raw('git fetch --prune [remote]')),
        inline`delete remote refs that were removed from the ${strong(inline`remote`)} repository`,
        inline(raw('git pull [remote]')),
        inline`fetch changes from the ${strong(inline`remote`)} and ${strong(inline`merge`)} current branch
with its upstream`,
        inline(raw('git pull -r/--rebase [remote]')),
        inline`fetch changes from the ${strong(inline`remote`)} and ${strong(inline`rebase`)} current branch
on top of the upstream`,
        inline(raw('git push -u [remote] [branch]')),
        inline`push local branch to a ${strong(inline`remote`)} repository and set its copy as an upstream`,
      ),
    ),
  )
}
