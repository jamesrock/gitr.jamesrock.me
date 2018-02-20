(function() {

	var
	commands = [
		{
			desc: 'install on macOS',
			code: 'curl -O http://gitr.jamesrock.me/bin/gitr;chmod 755 gitr;sudo mv gitr /usr/local/bin'
		},
		{
			desc: 'create new example branch from current branch',
			code: 'gitr branch example'
		},
		{
			desc: 'delete example branch',
			code: 'gitr unbranch example'
		},
		{
			desc: 'checkout master branch',
			code: 'gitr checkout master'
		},
		{
			desc: 'merge example branch into current branch',
			code: 'gitr merge example'
		},
		{
			desc: 'commit all changes to current branch',
			code: 'gitr commit "some work"'
		},
		{
			desc: 'discard changes to file since last commit',
			code: 'gitr discard js/app.js'
		},
		{
			desc: 'discard all changes since last commit',
			code: 'gitr discard'
		},
		{
			desc: 'revert file to commit-specific version',
			code: 'gitr revert js/app.js 43fba2...'
		},
		{
			desc: 'revert entire branch to commit-specific version',
			code: 'gitr revert 43fba2...'
		},
		{
			desc: 'push commits to remote branch',
			code: 'gitr push'
		},
		{
			desc: 'pull commits from remote branch',
			code: 'gitr pull'
		},
		{
			desc: 'list all commits (hit q to exit!)',
			code: 'gitr commits'
		},
		{
			desc: 'list all branches',
			code: 'gitr branches'
		},
		{
			desc: 'see git status',
			code: 'gitr status'
		},
		{
			desc: 'update remotes',
			code: 'gitr update'
		},
	];

})();
