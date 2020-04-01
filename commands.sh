# import sql file #
read -p " complete path to the Sql file  ex : c:/projects/demo.sql: " fileName && php bin/console doctrine:database:import $fileName
# mapping convert #
read -p " the format you want convert to ex: xml: " format && read -p " path to save the file ex: demo.xml:" path && php bin/console doctrine:mapping:convert $format $path
# mapping import #
read -p "Entities NameSpace ex : App\Entity: " namespace && read -p "file type you want ex:yaml or php :" format && read -p "Folder path to save the file ex config/doctrine: " path && php bin/console doctrine:mapping:import "$NameSpace" $format --path=$path
# dql  Sql#
read -p "Dql Query You Want To Run: " dql && php bin/console doctrine:query:dql $dql 
# lint #
read -p "The Name You want to set ex --local: " name && php bin/console secrets:set $name

    php bin/console assets:install                          #Installs bundles web assets under a public directory
    php bin/console cache:clear                             #Clears the cache
    php bin/console cache:pool:clear                        #Clears cache pools
    php bin/console cache:pool:delete                       #Deletes an item from a cache pool
    php bin/console cache:pool:list                         #List available cache pools
    php bin/console cache:pool:prune                        #Prunes cache pools
    php bin/console cache:warmup                            #Warms up an empty cache
    php bin/console config:dump-reference                   #Dumps the default configuration for an extension
    php bin/console debug:autowiring                        #Lists classes/interfaces you can use for autowiring
    php bin/console debug:config                            #Dumps the current configuration for an extension
    php bin/console debug:container                         #Displays current services for an application
    php bin/console debug:event-dispatcher                  #Displays configured listeners for an application
    php bin/console debug:form                              #Displays form type information
    php bin/console debug:router                            #Displays current routes for an application
    php bin/console debug:translation                       #Displays translation messages information
    php bin/console debug:twig                              #Shows a list of twig functions, filters, globals and tests
    php bin/console doctrine:cache:clear-collection-region  #Clear a second-level cache collection region
    php bin/console doctrine:cache:clear-entity-region      #Clear a second-level cache entity region
    php bin/console doctrine:cache:clear-metadata           #Clears all metadata cache for an entity manager
    php bin/console doctrine:cache:clear-query              #Clears all query cache for an entity manager
    php bin/console doctrine:cache:clear-query-region       #Clear a second-level cache query region
    php bin/console doctrine:cache:clear-result             #Clears result cache for an entity manager
    php bin/console doctrine:database:create                #Creates the configured database
    php bin/console doctrine:database:drop                  #Drops the configured database
    php bin/console doctrine:database:import                #Import SQL file(s) directly to Database.
    php bin/console doctrine:ensure-production-settings     #Verify that Doctrine is properly configured for a production environment
    php bin/console doctrine:fixtures:load                  #Load data fixtures to your database
    php bin/console doctrine:mapping:convert                #[orm:convert:mapping] Convert mapping information between supported formats 
    php bin/console doctrine:mapping:import                 #Imports mapping information from an existing database
    php bin/console doctrine:mapping:info#
    php bin/console doctrine:migrations:diff                #[diff] Generate a migration by comparing your current database to your mapping information.
    php bin/console doctrine:migrations:dump-schema         #[dump-schema] Dump the schema for your database to a migration.
    php bin/console doctrine:migrations:execute             #[execute] Execute a single migration version up or down manually.
    php bin/console doctrine:migrations:generate            #[generate] Generate a blank migration class.
    php bin/console doctrine:migrations:latest              #[latest] Outputs the latest version number
    php bin/console doctrine:migrations:migrate             #[migrate] Execute a migration to a specified version or the latest available version.
    php bin/console doctrine:migrations:rollup              #[rollup] Rollup migrations by deleting all tracked versions and insert the one version that exists.
    php bin/console doctrine:migrations:status              #[status] View the status of a set of migrations.
    php bin/console doctrine:migrations:up-to-date          #[up-to-date] Tells you if your schema is up-to-date.
    php bin/console doctrine:migrations:version             #[version] Manually add and delete migration versions from the version table.  doctrine:query:dql                      Executes arbitrary DQL directly from the command line
    php bin/console doctrine:query:sql                      #Executes arbitrary SQL directly from the command line.
    php bin/console doctrine:schema:create                  #Executes (or dumps) the SQL needed to generate the database schema
    php bin/console doctrine:schema:drop                    #Executes (or dumps) the SQL needed to drop the current database schema      
    php bin/console doctrine:schema:update                  #Executes (or dumps) the SQL needed to update the database schema to match the current mapping metadata
    php bin/console doctrine:schema:validate                #Validate the mapping files
    php bin/console lint:container                          #Ensures that arguments injected into services match type declarations       
    php bin/console lint:twig                               #Lints a template and outputs encountered errors
    php bin/console lint:xliff                              #Lints a XLIFF file and outputs encountered errors
    php bin/console lint:yaml                               #Lints a file and outputs encountered errors
    php bin/console make:auth                               #Creates a Guard authenticator of different flavors
    php bin/console make:command                            #Creates a new console command class
    php bin/console make:controller                         #Creates a new controller class
    php bin/console make:crud                               #Creates CRUD for Doctrine entity class
    php bin/console make:entity                             #Creates or updates a Doctrine entity class, and optionally an API Platform resource
    php bin/console make:fixtures                           #Creates a new class to load Doctrine fixtures
    php bin/console make:form                               #Creates a new form class
    php bin/console make:functional-test                    #Creates a new functional test class
    php bin/console make:migration                          #Creates a new migration based on database changes
    php bin/console make:registration-form                  #Creates a new registration form system
    php bin/console make:serializer:encoder                 #Creates a new serializer encoder class
    php bin/console make:serializer:normalizer              #Creates a new serializer normalizer class
    php bin/console make:subscriber                         #Creates a new event subscriber class
    php bin/console make:twig-extension                     #Creates a new Twig extension class
    php bin/console make:unit-test                          #Creates a new unit test class
    php bin/console make:user                               #Creates a new security user class
    php bin/console make:validator                          #Creates a new validator and constraint class
    php bin/console make:voter                              #Creates a new security voter class
    php bin/console router:match                            #Helps debug routes by simulating a path info match
    php bin/console secrets:decrypt-to-local                #Decrypts all secrets and stores them in the local vault.
    php bin/console secrets:encrypt-from-local              #Encrypts all local secrets to the vault.
    php bin/console secrets:generate-keys                   #Generates new encryption keys.
    php bin/console secrets:list                            #Lists all secrets.
    php bin/console secrets:remove                          #Removes a secret from the vault.
    php bin/console secrets:set                             #Sets a secret in the vault.
    php bin/console security:encode-password                #Encodes a password.
    php bin/console server:dump                             #Starts a dump server that collects and displays dumps in a single place     
    php bin/console server:log                              #Starts a log server that displays logs in real time
    php bin/console translation:update                      #Updates the translation file
