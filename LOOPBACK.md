## install the Loopback command line tool
```s
npm i -g @loopback/cli
```

## how to add a REST enpoint with loopback version 4
In loopback the REST crud enpoints for example POST/GET/DELETE etc
are in the controller and the type of data that is used by the controller is
in the model.

### using the lb4 command line tool
we assume you are making a Foo Controller and a Foo Model ( with properties `id` and `descripton`)

at the terminal make sure you are at the root of the project
then typer `lb4 model`
this will prompt you with

```bash
 ? Model class name: Foo

 ? Please select the model base class (Use arrow keys)
 ```

Choose

`> model (A business domain object)`

Now it will ask you for free-form properties, reply N(No)

` ? Allow additional (free-form) properties? N`

It will now say

`Let's add a property to Foo`

`Enter an empty property name when done`

` ? Enter the property name: id`

using the arrow keys select the type `number`

it will ask you if this is the ID of the Foo Model, say yes.

` ? Is id the ID property? y`

it will ask you is it required?  say yes

` ? Is it required?: y`

it will ask you for a default value, leave this blank

` ? Default value [leave blank for none]:`

Now it will say

`Let's add another property to Foo`

`Enter an empty property name when done`

` ? Enter the property name: description`

Continue by selecting `string`  required  `N`
and default value blank

Hit return twice to finish the process.

You should see a success message

`Model Foo was created in src/models/

you should now see the following TypeScript code in src/models/foo.models.ts

``` TypeScript
import {Model, model, property} from '@loopback/repository';

@model()
export class Foo extends Model {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Foo>) {
    super(data);
  }
}
```

### Great, now lets add a controller

type `lb4 controller`

it will prompt you for the controller name
which will be Foo

` ? Controller class nae: Foo`


## Using swagger to generate code
If you have a REST API already, it's possible you have
a swagger.json file.  If so it's relatively easy to download the file and generate your models and controllers.

### download the swagger.json
For example suppose I have a swagger test form.  In Firefox or Chrome, right mouse click on the screen and `inspect element` this sould bring up your browsers debug panel.  Simply go to the network tab, and reload your page.
You should see an http/s call to swagger.json

Copy that link to your clipboard.

In





### Additional Resources

https://loopback.io/doc/en/lb4/todo-tutorial.html


[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
