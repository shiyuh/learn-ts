# What is TS?
* TS = JS + Type system
* TS type system
    * Help us catch errors during dev
    * Uses 'type annotation' to analyze the code
    * Only active during dev (compiled to JS)
    * Doesn't provide any performance optimization
 * Think of TypeScript as a being like a friend sitting behind you while you are coding


# Types
* Easy way to refer to the different properties and functions that a value has
    * e.g. "red": it is a string - it is a value that has all the properties and methods that we assume a string has (charAt(), concat()...)
    * every value in typescript has a type
        * example: string, number, boolean, Date, Todo (see fetchjson/index.ts)
* Categories of types:
    * primitive types: number, boolean, string, symbol, undefined, null
    * object types: functions, objects, arrays, classes etc.
* Why do we care about types at all?
    * Allows TS compiler to analyze our code for errors
    * Allows other engineers to understand what values are flowing around in our code base

* Type annotations and type inference
    * Type annotation: code we add to tell TS what type of value a variable will refer to
    * Type inference: TS tries to figure out what type of value a variable refers to
        * if declaration and initialization are on the same line, TS will figure out the type for us
        ```javascript
        let apple = 5; // type number
        let apple; // type any
        apple = 5;
        ```
    * When to use type annotation?
        * when we declare a variable on one line then initialize it later
        * when we want a variable to have a type that cannot be inferred
        * when a function returns the "any" type and we need to clarify the value
            * avoid variables with 'any' **at all cost** because TS cannot do any typechecking
        * see `/annotations/variables.ts` for examples

    * Annotations with functions and objects
        * Type annotation for functions: code we add to tell TS what type of arguments a function will receive and what type of value it will return
        * Type inference for functions: TS tries to figure out what type of value a function will return
            * for arguments, we always have to use type annotation (no inference)
            * type inference for return value but we won't use it, use annotation to catch error


# Typed arrays
* arrays containing consistent type of values
* Why do we care?
    * TS can do type inference when extracting values from an array
    * TS can prevent us from adding incompatible values to the array
    * can get help with `map`, `forEach`, `reduce` functions
    * flexible - arrays can still contain multiple different types
* use arrays when we need to represent a collection of records with some arbitrary sort order

# Tuple
* array-like structure where each element represents some property of a record

# Interface
* creates a new type, describing the property names and value types of an object
* general strategy for code reuse in TS:
    * create functions that accept arguments that are typed with interfaces
    * objects/classes can decide to implement a given interface to work with a function

# Classes
* blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
* dual purpose: can also be used as type
* modifiers (TS)
    * `public`: this method can be called anywhere, any time
    * `private`: this method can only be called by other methods inside the class
    * `protected`: this method can be called by other methods in this class, or by other methods in child classes

# Other random notes
* Typescript can make use of JS libraries, but it needs type definition files (adaptor between JS library and TS code)
    * definitely typed naming scheme: @types/{library name}
* string to float conversion: `parseFloat()`
* export styles
    * convention within typescript is to not use `export default`
```javascript
// Three different export styles
export foo; // name export
export default foo; // default export, only 1 default per file
export = foo;

// The three matching import styles
import { foo } from 'blah';
import foo from 'blah'; // can give this any name you like
import * as foo from 'blah';
```
* Type definition files help TS understand 3rd party JS libraries such as those installed using npm
    * Also for scripts included in HTML file (to help TS understand global variables available)
* VSCode shortcut
    * CMD+shift+p to bring up command palette, hide level 2 to collapse methods
    * CMD+click to jump thru definitions and all