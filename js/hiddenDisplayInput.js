export const hiddenDisplayInput = (input) => {
    input.type === 'hidden'
        ? input.type = 'text'
        : input.type = 'hidden'
};

export default {
    hiddenDisplayInput,
};