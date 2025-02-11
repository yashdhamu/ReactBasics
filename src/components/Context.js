import React from "react";

const Context = React.createContext('Codevolution');

const UserProvider = Context.Provider;
const UserConsumer = Context.Consumer;

export { UserProvider, UserConsumer };
export default Context;