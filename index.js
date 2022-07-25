const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { icecreamActions } = require('./features/icecream/icecreamSlice');
const { fetchUsers } = require('./features/user/userSlice');

console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => {
  console.log('Updated state ', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();
