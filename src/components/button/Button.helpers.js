const VALID_TYPES = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  RESET: 'reset',
};

/**
 * Make sures that a valid type was provided
 * @param {string} type Button type
 * @returns {string} Button type, if it type is invalid, returns submit
 */
export function typeSafeguard(type) {
  const validatedType = VALID_TYPES[type.toUpperCase()] || VALID_TYPES.SUBMIT;
  return validatedType;
}
