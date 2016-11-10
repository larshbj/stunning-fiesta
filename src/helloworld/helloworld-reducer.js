/**
 * Created by LarsHenrik on 01.09.2016.
 */
import initialState from './helloworld-initial-state.js';

export default function (previousState, action) {

    if (typeof previousState === "undefined") {
        return initialState.getState();
    }

    switch (action.type) {
    }
    return previousState;
}
