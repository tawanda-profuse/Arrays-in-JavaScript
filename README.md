# Arrays as Data Types
An array is a data structure. A variable that has an array as its value can store a collection that is accessible in various ways. All object-oriented programming languages are capable of using arrays to store data, but Javascript is a [dynamically typed](https://www.techtarget.com/searchapparchitecture/tip/Static-vs-dynamic-typing-The-details-and-differences) language which uses less syntax when accessing, inserting into, and modifying an array. In this blog post, I will be demonstrating the use of arrays in Javascript and exploring all the ways of working with them in a project.

I have used the [Google Chrome](https://www.google.com/chrome/) developer console to write my code but you are free to use whichever code editor you like, I recommend [VS Code](https://code.visualstudio.com/). The source code I've used can be found on my GitHub repository [here](https://github.com/tawanda-profuse/Arrays-in-JavaScript). To understand arrays, you will need to understand Javascript basics like [variable declaration](https://www.w3schools.com/js/js_variables.asp), [data types](https://www.w3schools.com/js/js_datatypes.asp), and [console output](https://www.w3schools.com/jsref/met_console_log.asp). The syntax for an array looks like this:

`var africanCountries = ['Zimbabwe', 'Nigeria', 'South Africa', 'Egypt', 'DRC', 'Kenya'];`  

The array I have declared is called **africanCountries** and it holds six values. The trick with arrays is that the values are indexed and can be referenced by stating the numeric position subtracted by 1. The first value in any array is always located at index 0, so in our example variable we can access the first item in the array by writing:

`console.log(africanCountries[0]);`

This will output **Zimbabwe** to the console:

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_1.png)

If you open Google Chrome, you can right-click any web page and select **inspect**. This opens a section on the page that gives you access to developer tools as well as other tools that allow you to monitor HTML elements, source files, network performance etc. If you don't have a code editor, you can use Google Chrome's text editor under the **console** tab. This allows you to write Javascript syntax.

![How to access the developer tools:](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_2.png)
***Accessing the developer tools***

![How to access the developer tools:](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_3.png)
***The console tab under developer tools***

## Adding & Removing Values
You can insert items into an array by using the `push()` method. This adds a value to the array which gives it an index that is greater than the current last index by one. So, for example the code below adds **Botswana** to our previously declared array.

```
africanCountries.push('Botswana');

console.log(africanCountries); // Prints the new array to the console
```

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_4.png)

The **africanCountries** array now stores 7 items. If you wanted to access **Botswana**, you would access it's index which is the number '6'. In order to remove an item from the array, you would use the `pop()` method by doing this:

`africanCountries.pop();`

The array now has 6 items and you will notice that Botswana is no longer part of the array. I will now insert something that will not be stored at the last index. I would like to add **Ghana** to the collection:

```
africanCountries[3] = 'Ghana';

console.log(africanCountries); // Ghana has been inserted and has an index of 3
```

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_5.png)
***The new array including Ghana***

Notice that **Egypt** which was at the 3rd index has been replaced by **Ghana**. One thing to note is that an array can have an endless amount of values, I've just used a few for demonstration purposes but apparently it can store 2^31 - 1 values which is equal to 2, 147, 483, 647 items. One advantage of arrays is the ability to store multiple values as opposed to having individual variables to store each item. In addition, arrays can store all Javascript data types including [objects](https://www.w3schools.com/js/js_objects.asp). Declaring a variable for each country in our array would be tedious.

## Loop Iteration
We can traverse an array using a ***for*** loop which will access each item in an array. With our previously declared africanCountries array, I will go over every item in the array and display it to output.

```
for(var x = 0; x < africanCountries.length; x++){

    console.log(africanCountries[x]);
}
```

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_6.png)

The loop accesses each item in the array and returns it before proceeding to the next. We use the variable ***x*** to work as the index as we go over our array, making sure to increase it by 1. The loop terminates when variable ***x*** reaches the value of 5. I have used the `length()` method which is a feature available for arrays in order to get the size of the array. The `africanCountries` array has a size of 6, and generally the size of an array is always one more than the last index. The last index of our array is 5 and it holds the value ***Kenya***. A good way to remember the last index in any array is using `console.log()` on the array, that way we can automatically find the last index of our array which is the returned value minus 1.

```
africanCountries.length; // This will return 6

console.log("There are " + africanCountries.length + " items in the array"); 
```
## Spread Operator
Another way to manipulate arrays is by using the *spread* operator. This method creates a copy of an array which can be used inside another array. It is similar to [string interpolation](https://dmitripavlutin.com/string-interpolation-in-javascript/). Let's imagine that there was a multinational meeting of countries from all continents of the world and we wanted to invite a representative from every country. We can do this by creating an array and accessing items from another array. I will declare 3 more arrays for this example. The syntax of the *spread* is `...` and should be used inside square brackets as demonstrated below:

```
// Declare an empty array:
var internationalUnion = [];

//Declare 3 arrays for the other continents:
var asianCountries = ['Japan', 'China', 'Thailand'];
var northAmerica = ['USA', 'Canada'];
var europeNations = ['France', 'UK', 'Spain'];

// Re-assign the array using the spread operator:

internationalUnion = [...asianCountries, ...northAmerica, ...europeNations, ...africanCountries];

console.log(internationalUnion); // Returns the array with all the countries
```

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_7.png)
***The new array that includes the previously defined arrays***

Notice how despite using the spread operator, we still have to include the commas in the square brackets of our array to ensure that the compiler knows where to separate the array items. By using the spread operator, we have saved lots of time of inserting a large amount of data. Even within our new array, we can still use the ***push()*** method on our array and add more values:

```
internationalUnion.push('Australia');

console.log(internationalUnion); // The list now includes Australia
```

![Example output of our code](https://github.com/tawanda-profuse/Arrays-in-JavaScript/blob/master/images/image_8.png) 

Now that you know a little bit more about arrays, go ahead and make something using them. 