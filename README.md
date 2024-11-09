<div style="background-color: rgba(251,227,138,0.42); border: 1px solid #FFEB3B; padding: 10px; border-radius: 5px; color: white">
**⚠ Notice: This Package is No Longer Maintained**
</div>

Thank you for your support and use of this package. Please note that this package is now deprecated and will no longer receive updates, bug fixes, or support.

We recommend using the latest package, [new-package-name](https://www.npmjs.com/package/@meersagor/js-composable), which offers improved functionality, better support, and ongoing maintenance.

### To migrate:
- Check the [new package documentation](https://www.npmjs.com/package/@meersagor/js-composable) for installation and usage instructions.
- If you have questions, please refer to the new package's support channels.

Thank you for your understanding, and we appreciate your continued support in using our updated solutions!

# useGenerateFormData
A tiny NPM package to generate any object or deeply nested object into `FormData`. This package is built with TypeScript and can be used in any JavaScript application.

## Installation
To install the package, run the following command:
```bash
npm i @meersagor/generateformdata
```
## Usage
#### Importing  the  Package
To  use  the  package,  import  the  required  methods:
```javascript
import  {  useGenerateFormData,  logGenerateFormData  }  from  '@meersagor/generateformdata';
```
### Example 1: Simple Object
```javascript
const  obj  =  {
	name:  'Meer Sagor',
	age:  24,
	skills: ['javaScript', 'typeScript',  'vuejs',  'nuxtjs',  'reactjs',  'nextjs']
};
const  result  =  useGenerateFormData({ objectData: obj });
//  If  you  want  to  log  the  generated  FormData,  use  the  logGenerateFormData  method
logGenerateFormData(result);
```
### Example  2:  Object  with  File  and  Custom  File  Key
Here  is  an  example  of  how  to  use  the  package  with  an  object  that  includes  a  file  and  a  custom  file  key:

```javascript
const  obj2  =  {
	name:  'Meer Sagor',
	age:  24,
	skills: ['javaScript', 'typeScript',  'vuejs',  'nuxtjs',  'reactjs',  'nextjs'],
	file:  new  File(["content"], "filename.txt") //  Example  file  object
};
const  result  =  useGenerateFormData({ objectData: obj2, fileKey: 'attachment' });
//  Log  the  generated  FormData
logGenerateFormData(result);
```

## Methods

`useGenerateFormData`
This  method  generates  FormData  from  the  provided  object.
#### Parameters
- `objectData`:  The  object  to  be  converted  into  FormData.
- `fileKey (optional)`: The key to use for the file if the object contains a file and want to set custom key.

#### Returns
- `FormData`:  The  generated  `FormData`  object.
- `logGenerateFormData` This  method  logs  the  generated  `FormData`  to  the  console.

#### Parameters
- `formData`:  The  `FormData`  object  to  be  logged.

## License
This  package  is  open-source  and  available  under  the  [MIT  License.](https://github.com/meer-sagor/generate-form-data?tab=MIT-1-ov-file)
## Contributing
Contributions  are  welcome!  Please  feel  free  to  submit  a  [pull  request.](https://github.com/meer-sagor/generate-form-data/pulls)

## Issues
If  you  encounter  any  issues,  please  create  a  [new  issue.](https://github.com/meer-sagor/generate-form-data/issues)