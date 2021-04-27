const vscode = require('vscode')

/**
 * @param {vscode.ExtensionContext} context
 */
function runcommand(isOpen, command) {
	vscode.commands.executeCommand('workbench.action.terminal.new')
	if (isOpen) {
		setTimeout(function () {
			const terminal = vscode.window.terminals[vscode.window.terminals.length - 1]
			terminal.sendText(command)
		}, 1200)
	} else {
		setTimeout(function () {
			const termo = vscode.window.activeTerminal
			termo.sendText(command)
		}, 1200)
	}
}

function checkTerminal(command) {
	if (vscode.window.terminals.length === 0) {
		runcommand(false, command)
	} else {
		runcommand(true, command)
	}
}

function activate(context) {


	/**
	 * commands
	 */
	const pathConfig = vscode.workspace.getConfiguration("superConsole")
	const mainSymfonyCommand = pathConfig.get("path") + " "
	const runCommandes = []


	//\\//-//--\\-Make-//\\//-//--\\


	// make new symfony controller 
	let makeController = vscode.commands.registerCommand('SymfonyConsole.makeController', function () {
		console.log(mainSymfonyCommand)
		let command = mainSymfonyCommand + 'make:controller'
		checkTerminal(command)
		runCommandes.push('makeController')
	})
	// make new symfony entity 
	let makeEntity = vscode.commands.registerCommand('SymfonyConsole.makeEntity', function () {
		let command = mainSymfonyCommand + 'make:entity'
		checkTerminal(command)
		runCommandes.push('makeEntity')

	})

	//\\//-//--\\-assets-//\\//-//--\\

	// install asset folder 
	let assetInstall = vscode.commands.registerCommand('SymfonyConsole.assetInstall', function () {
		let command = mainSymfonyCommand + 'assets:install'
		checkTerminal(command)
		runCommandes.push('assetInstall')
	})

	//\\//-//--\\-cache-//\\//-//--\\

	// clearCache
	let clearCache = vscode.commands.registerCommand('SymfonyConsole.clearCache', function () {
		let command = mainSymfonyCommand + 'cache:clear'
		checkTerminal(command)
		runCommandes.push('clearCache')
	})
	// Cachewarmup
	let warmupCache = vscode.commands.registerCommand('SymfonyConsole.warmupCache', function () {
		let command = mainSymfonyCommand + 'cache:warmup'
		checkTerminal(command)
		runCommandes.push('warmupCache')
	})
	// config:dump-reference
	let configDump = vscode.commands.registerCommand('SymfonyConsole.configDump', function () {
		let command = mainSymfonyCommand + 'config:dump-reference'
		checkTerminal(command)
		runCommandes.push('configDump')
	})

	const pool = 'cache:pool:'

	// clearPoolCache
	let clearPoolCache = vscode.commands.registerCommand('SymfonyConsole.clearPoolCache', function () {
		let command = mainSymfonyCommand + pool + 'clear'
		checkTerminal(command)
		runCommandes.push('clearPoolCache')
	})
	// deletePoolCache
	let poolDelete = vscode.commands.registerCommand('SymfonyConsole.poolDelete', function () {
		let command = mainSymfonyCommand + pool + 'delete'
		checkTerminal(command)
		runCommandes.push('poolDelete')
	})
	// cachePoollist
	let poolList = vscode.commands.registerCommand('SymfonyConsole.poolList', function () {
		let command = mainSymfonyCommand + pool + 'list'
		checkTerminal(command)
		runCommandes.push('poolList')
	})
	// cachePoolprune 
	let poolPrune = vscode.commands.registerCommand('SymfonyConsole.poolPrune', function () {
		let command = mainSymfonyCommand + pool + 'prune'
		checkTerminal(command)
		runCommandes.push('poolPrune')
	})

	//\\//-//--\\-debug-//\\//-//--\\

	const debug = 'debug:'


	let debugAutowiring = vscode.commands.registerCommand('SymfonyConsole.debugAutowiring', function () {
		let command = mainSymfonyCommand + debug + 'autowiring'
		checkTerminal(command)
		runCommandes('debugAutowiring')
	})
	let debugConfig = vscode.commands.registerCommand('SymfonyConsole.debugConfig', function () {
		let command = mainSymfonyCommand + debug + 'config'
		checkTerminal(command)
		runCommandes('debugConfig')
	})
	let debugContainer = vscode.commands.registerCommand('SymfonyConsole.debugContainer', function () {
		let command = mainSymfonyCommand + debug + 'container'
		checkTerminal(command)
		runCommandes('debugContainer')
	})
	let debugEventDispatcher = vscode.commands.registerCommand('SymfonyConsole.debugEventDispatcher', function () {
		let command = mainSymfonyCommand + debug + 'event-dispatcher'
		checkTerminal(command)
		runCommandes('debugEventDispatcher')
	})
	let debugForm = vscode.commands.registerCommand('SymfonyConsole.debugForm', function () {
		let command = mainSymfonyCommand + debug + 'form'
		checkTerminal(command)
		runCommandes('debugForm')
	})
	let debugRouter = vscode.commands.registerCommand('SymfonyConsole.debugRouter', function () {
		let command = mainSymfonyCommand + debug + 'router'
		checkTerminal(command)
		runCommandes('debugRouter')
	})
	let debugTranslation = vscode.commands.registerCommand('SymfonyConsole.debugTranslation', function () {
		let command = mainSymfonyCommand + debug + 'translation'
		checkTerminal(command)
		runCommandes('debugTranslation')
	})
	let debugTwig = vscode.commands.registerCommand('SymfonyConsole.debugTwig', function () {
		let command = mainSymfonyCommand + debug + 'twig'
		checkTerminal(command)
		runCommandes('debugTwig')
	})
	let debugvalidator = vscode.commands.registerCommand('SymfonyConsole.debugvalidator', function () {
		let command = mainSymfonyCommand + debug + 'validator'
		checkTerminal(command)
		runCommandes('debugvalidator')
	})



	//\\//-//--\\-doctrine**Cache-//\\//-//--\\

	const doctrineCache = 'doctrine:cache:'

	let doctrineClearCol = vscode.commands.registerCommand('SymfonyConsole.doctrineClearCol', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-collection-region'
		checkTerminal(command)
		runCommandes.push('doctrineClearCol')
	})
	let doctrineClearEntity = vscode.commands.registerCommand('SymfonyConsole.doctrineClearEntity', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-entity-region'
		checkTerminal(command)
		runCommandes.push('doctrineClearEntity')
	})
	let doctrineClearMeta = vscode.commands.registerCommand('SymfonyConsole.doctrineClearMeta', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-metadata'
		checkTerminal(command)
		runCommandes.push('doctrineClearMeta')
	})
	let doctrineClearQuery = vscode.commands.registerCommand('SymfonyConsole.doctrineClearQuery', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-query'
		checkTerminal(command)
		runCommandes.push('doctrineClearQuery')
	})
	let doctrineClearRegoin = vscode.commands.registerCommand('SymfonyConsole.doctrineClearRegoin', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-query-region'
		checkTerminal(command)
		runCommandes.push('doctrineClearRegoin')
	})
	let doctrineClearResult = vscode.commands.registerCommand('SymfonyConsole.doctrineClearResult', function () {
		let command = mainSymfonyCommand + doctrineCache + 'clear-result'
		checkTerminal(command)
		runCommandes.push('doctrineClearResult')
	})


	//\\//-//--\\-doctrine**DataBase-//\\//-//--\\

	const doctrineDataBase = 'doctrine:database:'

	let doctrineCreate = vscode.commands.registerCommand('SymfonyConsole.doctrineCreate', function () {
		let command = mainSymfonyCommand + doctrineDataBase + 'create'
		checkTerminal(command)
		runCommandes.push('doctrineCreate')
	})

	let doctrineDrop = vscode.commands.registerCommand('SymfonyConsole.doctrineDrop', function () {
		let command = mainSymfonyCommand + doctrineDataBase + 'drop --force'
		checkTerminal(command)
		runCommandes.push('doctrineDrop')
	})

	let doctrineImport = vscode.commands.registerCommand('SymfonyConsole.doctrineImport', function () {
		let command = 'read -p "complete path to the Sql file ex: demo.sql: " fileName && php bin/console doctrine:database:import $fileName'
		checkTerminal(command)
		runCommandes.push('doctrineImport')
	})
	let doctrineProdSettings = vscode.commands.registerCommand('SymfonyConsole.doctrineProdSettings', function () {
		let command = mainSymfonyCommand + 'doctrine:ensure-production-settings'
		checkTerminal(command)
		runCommandes.push('doctrineProdSettings')
	})

	//\\//-//--\\-doctrine**Fixtures-//\\//-//--\\

	const fixtures = 'doctrine:fixtures:'

	let doctrineFixturesLoad = vscode.commands.registerCommand('SymfonyConsole.doctrineFixturesLoad', function () {
		let command = mainSymfonyCommand + fixtures + 'load'
		checkTerminal(command)
		runCommandes.push('doctrineFixturesLoad')
	})

	//\\//-//--\\-doctrine**Mapping-//\\//-//--\\

	const mapping = 'doctrine:mapping:'

	let mappingConvert = vscode.commands.registerCommand('SymfonyConsole.mappingConvert', function () {
		let command = 'read -p " the format you want convert to ex: xml: " format && read -p " path to the folder for save the file ex: Backup:" path && php bin/console doctrine:mapping:convert $format $path'
		checkTerminal(command)
		runCommandes.push('mappingConvert')
	})
	let mappingImport = vscode.commands.registerCommand('SymfonyConsole.mappingImport', function () {
		let command = 'read -p "Entities NameSpace ex : App\Entity: " namespace && read -p "file type you want ex:yaml or php :" format && read -p "Folder path to save the file ex config/doctrine: " path && php bin/console doctrine:mapping:import "$NameSpace" $format --path=$path'
		checkTerminal(command)
		runCommandes.push('mappingImport')
	})
	let mappingInfo = vscode.commands.registerCommand('SymfonyConsole.mappingInfo', function () {
		let command = mainSymfonyCommand + mapping + 'info'
		checkTerminal(command)
		runCommandes.push('mappingInfo')
	})


	//\\//-//--\\-doctrine**Migration-//\\//-//--\\

	const migration = 'doctrine:migrations:'


	let migDiff = vscode.commands.registerCommand('SymfonyConsole.migDiff', function () {
		let command = mainSymfonyCommand + migration + 'diff'
		checkTerminal(command)
		runCommandes.push('migDiff')
	})
	let migDump = vscode.commands.registerCommand('SymfonyConsole.migDump', function () {
		let command = mainSymfonyCommand + migration + 'dump-schema '
		checkTerminal(command)
		runCommandes.push('migDump')
	})
	let migExe = vscode.commands.registerCommand('SymfonyConsole.migExe', function () {
		let command = mainSymfonyCommand + migration + 'execute '
		checkTerminal(command)
		runCommandes.push('migExe')
	})
	let migGen = vscode.commands.registerCommand('SymfonyConsole.migGen', function () {
		let command = mainSymfonyCommand + migration + 'generate '
		checkTerminal(command)
		runCommandes.push('migGen')
	})
	let migLat = vscode.commands.registerCommand('SymfonyConsole.migLat', function () {
		let command = mainSymfonyCommand + migration + 'latest'
		checkTerminal(command)
		runCommandes.push('migLat')
	})
	let migMigrate = vscode.commands.registerCommand('SymfonyConsole.migMigrate', function () {
		let command = mainSymfonyCommand + migration + 'migrate'
		checkTerminal(command)
		runCommandes.push('migMigrate')
	})
	let migRollup = vscode.commands.registerCommand('SymfonyConsole.migRollup', function () {
		let command = mainSymfonyCommand + migration + 'rollup'
		checkTerminal(command)
		runCommandes.push('migRollup')
	})
	let migStat = vscode.commands.registerCommand('SymfonyConsole.migStat', function () {
		let command = mainSymfonyCommand + migration + 'status'
		checkTerminal(command)
		runCommandes.push('migStat')
	})
	let migUpToDate = vscode.commands.registerCommand('SymfonyConsole.migUpToDate', function () {
		let command = mainSymfonyCommand + migration + 'up-to-date'
		checkTerminal(command)
		runCommandes.push('migUpToDate')
	})
	let migVersion = vscode.commands.registerCommand('SymfonyConsole.migVersion', function () {
		let command = mainSymfonyCommand + migration + 'version'
		checkTerminal(command)
		runCommandes.push('migVersion')
	})

	//\\//-//--\\-doctrine**Schema-//\\//-//--\\


	const schema = 'doctrine:schema:'

	let schemCreate = vscode.commands.registerCommand('SymfonyConsole.schemCreate', function () {
		let command = mainSymfonyCommand + schema + 'create'
		checkTerminal(command)
		runCommandes.push('schemCreate')
	})
	let schemDrop = vscode.commands.registerCommand('SymfonyConsole.schemDrop', function () {
		let command = mainSymfonyCommand + schema + 'drop'
		checkTerminal(command)
		runCommandes.push('schemDrop')
	})
	let schemUpdate = vscode.commands.registerCommand('SymfonyConsole.schemUpdate', function () {
		let command = mainSymfonyCommand + schema + 'update'
		checkTerminal(command)
		runCommandes.push('schemUpdate')
	})
	let schemValidate = vscode.commands.registerCommand('SymfonyConsole.schemValidate', function () {
		let command = mainSymfonyCommand + schema + 'validate'
		checkTerminal(command)
		runCommandes.push('schemValidate')
	})


	//\\//-//--\\-Lint-//\\//-//--\\

	const lint = 'lint:'


	let lintCont = vscode.commands.registerCommand('SymfonyConsole.lintCont', function () {
		let command = mainSymfonyCommand + lint + 'container'
		checkTerminal(command)
		runCommandes.push('lintCont')
	})
	let lintTwig = vscode.commands.registerCommand('SymfonyConsole.lintTwig', function () {
		let command = mainSymfonyCommand + lint + 'twig'
		checkTerminal(command)
		runCommandes.push('lintTwig')
	})
	let lintXliff = vscode.commands.registerCommand('SymfonyConsole.lintXliff', function () {
		let command = 'read -p "Xliff file path you want to lint ex: config/services.xliff : " xl && php bin/console lint:xliff $xl'
		checkTerminal(command)
		runCommandes.push('lintXliff')
	})

	let lintYaml = vscode.commands.registerCommand('SymfonyConsole.lintYaml', function () {
		let command = 'read -p "Yaml file path you want to lint ex: config/services.yaml : " yaml && php bin/console lint:yaml $yaml'
		checkTerminal(command)
		runCommandes.push('lintYaml')
	})

	//\\//-//--\\-Make-//\\//-//--\\

	const make = 'make:'

	let makeAuth = vscode.commands.registerCommand('SymfonyConsole.makeAuth', function () {
		let command = mainSymfonyCommand + make + 'auth'
		checkTerminal(command)
		runCommandes.push('makeAuth')
	})
	let makeCommand = vscode.commands.registerCommand('SymfonyConsole.makeCommand', function () {
		let command = mainSymfonyCommand + make + 'command'
		checkTerminal(command)
		runCommandes.push('makeCommand')
	})
	let makeCrud = vscode.commands.registerCommand('SymfonyConsole.makeCrud', function () {
		let command = mainSymfonyCommand + make + 'crud'
		checkTerminal(command)
		runCommandes.push('makeCrud')
	})
	let makeFixtures = vscode.commands.registerCommand('SymfonyConsole.makeFixtures', function () {
		let command = mainSymfonyCommand + make + 'fixtures'
		checkTerminal(command)
		runCommandes.push('makeFixtures')
	})
	let makeForm = vscode.commands.registerCommand('SymfonyConsole.makeForm', function () {
		let command = mainSymfonyCommand + make + 'form'
		checkTerminal(command)
		runCommandes.push('makeForm')
	})
	let makeFun = vscode.commands.registerCommand('SymfonyConsole.makeFun', function () {
		let command = mainSymfonyCommand + make + 'functional-test'
		checkTerminal(command)
		runCommandes.push('makeFun')
	})
	let makeMig = vscode.commands.registerCommand('SymfonyConsole.makeMig', function () {
		let command = mainSymfonyCommand + make + 'migration'
		checkTerminal(command)
		runCommandes.push('makeMig')
	})
	let makeReg = vscode.commands.registerCommand('SymfonyConsole.makeReg', function () {
		let command = mainSymfonyCommand + make + 'registration-form'
		checkTerminal(command)
		runCommandes.push('makeReg')
	})
	let makeSub = vscode.commands.registerCommand('SymfonyConsole.makeSub', function () {
		let command = mainSymfonyCommand + make + 'subscriber'
		checkTerminal(command)
		runCommandes.push('makeSub')
	})
	let makeTwigExe = vscode.commands.registerCommand('SymfonyConsole.makeTwigExe', function () {
		let command = mainSymfonyCommand + make + 'twig-extension'
		checkTerminal(command)
		runCommandes.push('makeTwigExe')
	})

	let makeTest = vscode.commands.registerCommand('SymfonyConsole.makeTest', function () {
		let command = mainSymfonyCommand + make + 'unit-test'
		checkTerminal(command)
		runCommandes.push('makeTest')
	})

	let makeUser = vscode.commands.registerCommand('SymfonyConsole.makeUser', function () {
		let command = mainSymfonyCommand + make + 'user'
		checkTerminal(command)
		runCommandes.push('makeUser')
	})
	let makeVal = vscode.commands.registerCommand('SymfonyConsole.makeVal', function () {
		let command = mainSymfonyCommand + make + 'validator'
		checkTerminal(command)
		runCommandes.push('makeVal')
	})
	let makeVot = vscode.commands.registerCommand('SymfonyConsole.makeVot', function () {
		let command = mainSymfonyCommand + make + 'voter'
		checkTerminal(command)
		runCommandes.push('makeVot')
	})
	let makeNor = vscode.commands.registerCommand('SymfonyConsole.makeNor', function () {
		let command = mainSymfonyCommand + make + 'serializer:normalizer'
		checkTerminal(command)
		runCommandes.push('makeNor')
	})
	let makeEncoder = vscode.commands.registerCommand('SymfonyConsole.makeEncoder', function () {
		let command = mainSymfonyCommand + make + 'serializer:encoder'
		checkTerminal(command)
		runCommandes.push('makeEncoder')
	})


	//\\//-//--\\-secrets-//\\//-//--\\

	const secrets = 'secrets:'

	let decToLoc = vscode.commands.registerCommand('SymfonyConsole.decToLoc', function () {
		let command = mainSymfonyCommand + secrets + 'decrypt-to-local'
		checkTerminal(command)
		runCommandes.push('decToLoc')
	})
	let encToLoc = vscode.commands.registerCommand('SymfonyConsole.encToLoc', function () {
		let command = mainSymfonyCommand + secrets + 'encrypt-from-local'
		checkTerminal(command)
		runCommandes.push('encToLoc')
	})
	let genKeys = vscode.commands.registerCommand('SymfonyConsole.genKeys', function () {
		let command = mainSymfonyCommand + secrets + 'generate-keys'
		checkTerminal(command)
		runCommandes.push('genKeys')
	})
	let secList = vscode.commands.registerCommand('SymfonyConsole.secList', function () {
		let command = mainSymfonyCommand + secrets + 'list'
		checkTerminal(command)
		runCommandes.push('secList')
	})
	let secRemove = vscode.commands.registerCommand('SymfonyConsole.secRemove', function () {
		let command = mainSymfonyCommand + secrets + 'remove'
		checkTerminal(command)
		runCommandes.push('secRemove')
	})
	let secSet = vscode.commands.registerCommand('SymfonyConsole.secSet', function () {
		let command = 'read -p "The Name You want to set And The Env ex PASSWORD --env=prod : " name && php bin/console secrets:set $name'
		checkTerminal(command)
		runCommandes.push('secSet')
	})



	//\\//-//--\\-security-//\\//-//--\\


	let secEncode = vscode.commands.registerCommand('SymfonyConsole.secEncode', function () {
		let command = mainSymfonyCommand + 'security:encode-password'
		checkTerminal(command)
		runCommandes.push('secEncode')
	})

	//\\//-//--\\-server-//\\//-//--\\

	let serverDump = vscode.commands.registerCommand('SymfonyConsole.serverDump', function () {
		let command = mainSymfonyCommand + 'server:dump'
		checkTerminal(command)
		runCommandes.push('serverDump')
	})
	let serverLog = vscode.commands.registerCommand('SymfonyConsole.serverLog', function () {
		let command = mainSymfonyCommand + 'server:log'
		checkTerminal(command)
		runCommandes.push('serverLog')
	})

	//\\//-//--\\-translation-//\\//-//--\\


	let transUpdate = vscode.commands.registerCommand('SymfonyConsole.transUpdate', function () {
		let command = mainSymfonyCommand + 'translation:update'
		checkTerminal(command)
		runCommandes.push('transUpdate')
	})

	// push all commands to context 
	runCommandes.forEach(runC => {
		context.subscriptions.push(runC)
	})
}




exports.activate = activate

function deactivate() {
	vscode.window.showInformationMessage('good bye')
}

module.exports = {
	activate,
	deactivate
}
