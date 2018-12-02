# Preparation
`Node.js`, `Yarn` are required.
this repo is create by `create-react-app`

# Installation
use method #1, install `lodash`
```bash
$ yarn add lodash
```
import 1.js in `methods/index`
```jsx harmony
import _ from './1';
const { get, tail, times, uniq } = _;
```

use method #1 #2 #3, install `lodash`
```bash
$ yarn add lodash
```
import 2.js or 3.js in `methods/index`
```jsx harmony
import { get, tail, times, uniq } from './2';
// import { get, tail, times, uniq } from './3';
```

use #4, install `lodash.{method}` one by one
```bash
$ yarn add lodash.get lodash.tail lodash.times lodash.uniq
```
import 4.js in `methods/index`
```jsx harmony
import { get, tail, times, uniq } from './4';
```

# Analyze the bundle size
```bash
$ npm run analyze
```

# Four Ways to Import Lodash

### 1. Import the whole library:

```bash
$ yarn add lodash
```

```jsx harmony
import _ from 'lodash';
```

- Pros:
  - Only one import line
 
- Cons:
  - It seems like the import of a whole library will lead to the largest bundle size
  - Less readable usage in the javascript code
 

### 2. Import specific methods inside of curly brackets:
 
```bash
$ yarn add lodash
```

```jsx harmony
import { get, tail, times, uniq } from 'lodash';
```

- Pros:
  - Only one import line (for a decent amount of functions)
  - More readable usage: get() instead of _.get() later in the javascript code

- Cons:
  - Every time we want use a new function or stop using another - it needs to be maintained and managed
 

### 3. Import specific methods one by one:

```bash
$ yarn add lodash
```

```jsx harmony
import get from 'lodash/get';
import tail from 'lodash/tail';
import times from 'lodash/times';
import uniq from 'lodash/uniq';
```

- Pros:
  - Seems to be the smallest bundle size.
  - More readable usage: get() instead of _.get()

- Cons:
  - The import maintenance is much more complicated than the previous options
  - Lots of import lines in the head of the file don’t look nice and readable.

### 4. Import specific methods and Install one by one:

```bash
$ yarn add lodash.get lodash.tail lodash.times lodash.uniq
```

```jsx harmony
import get from 'lodash.get';
import tail from 'lodash.tail';
import times from 'lodash.times';
import uniq from 'lodash.uniq';
```

- Pros:
  - Seems to be the smallest bundle size.
  - More readable usage: get() instead of _.get()

- Cons:
  - The import maintenance is much more complicated than the previous options
  - Lots of import lines in the head of the file don’t look nice and readable.
