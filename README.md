Directory structure
====
* /app  # app root path
    * app               # phalcon web sources
        * config        
        * controllers   # controllers
        * library      
        * migrations    
        * models        
        * public        # css/js/static assets
        * views         # templates
    * public            # generated code

        
Start
=====

```
git clone git@bitbucket.org:ukfxdev/new.exchangerates.org.uk.git
cd new.exchangerates.org.uk
docker-compose up -d
```
then visit http://new.exchangerates.org.uk.l.ukfx.co.uk

        
Development
====

* all global styles/scripts should be placed in `/resources`

to compile js/css/assets:
=====
from local machine: `docker exec ukfxpages npm run watch`

or within container:

`npm run dev` # to build dev 
`npm run watch` # to build and watch for changes

adding new page / route / action
====

follow Laravel best practices
create custom route
===

[https://docs.phalconphp.com/en/latest/routing#defining-routes]
* add new route in `config/router.php` as per existing example
* create controller in `controllers` (`app/controllers/CurrencyController.php`) folder and add required action
* add template in `views` folder (`app/views/currency/daily.phtml`)

