const INITIAL_STATE = { face: "" };

const selectFace = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: action.payload };

        case "SAD":
            return { ...state, face: action.payload };

        case "ANGRY":
            return { ...state, face: action.payload };

        case "CONFUSED":
            return { ...state, face: action.payload }

        default:
            return state;
    }
}

const store = Redux.createStore(selectFace);

// Code written with redux subscribe method

function handleFaceChange() {
    const face = store.getState().face;
    $("#p_face").text(face);
}

const unsub = store.subscribe(handleFaceChange);

$("#happy").on("click", function () {
    store.dispatch({ type: "HAPPY", payload: "^_^" });
    $("#p_face").css("background-color", "yellow");
});
$("#sad").on("click", () => {
    store.dispatch({ type: "SAD", payload: "T.T" });
    $("#p_face").css("background-color", "blue");
});
$("#angry").on("click", () => {
    store.dispatch({ type: "ANGRY", payload: "ಠ▃ಠ" });
    $("#p_face").css("background-color", "red");
});
$("#confused").on("click", () => {
    store.dispatch({ type: "CONFUSED", payload: "(@_@)" });
    $("#p_face").css("background-color", "orange");
});

// Code written without redux subscribe method

// const $p_face = $("#p_face");
// $("#happy").on("click", function () {
//     store.dispatch({ type: "HAPPY", payload: "^_^" });
//     const face = store.getState().face;
//     $p_face.text(face);
// });
// $("#sad").on("click", () => {
//     store.dispatch({ type: "SAD", payload: "T.T" });
//     $p_face.text(store.getState().face);
// });
// $("#angry").on("click", () => {
//     store.dispatch({ type: "ANGRY", payload: "ಠ▃ಠ" });
//     $p_face.text(store.getState().face);
// });
// $("#confused").on("click", () => {
//     store.dispatch({ type: "CONFUSED", payload: "(@_@)" });
//     $p_face.text(store.getState().face);
// });
