import {Machine} from "xstate";

const lightMachine = Machine(
    {
        id: 'light',
        initial: 'green',
        states: {
            green: {
                // action referenced via string
                entry: 'alertGreen'
            }
        }
    },
    {
        actions: {
            // action implementation
            alertGreen: (context, event) => {
                alert('Green!');
            }
        },
        activities: {
            /* ... */
        },
        guards: {
            /* ... */
        },
        services: {
            /* ... */
        }
    }
);


console.log(
    lightMachine.toJSON()
);


