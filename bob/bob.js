const sanitizeMessage = message => message.trim();

const isQuestion = sanitizedMessage =>
  sanitizedMessage.charAt(sanitizedMessage.length - 1) === "?";

const isYell = sanitizedMessage => {
  const sanitizeMessageLetters = sanitizedMessage.match(/[A-Z]|[a-z]/g);

  return (
    sanitizeMessageLetters &&
    sanitizeMessageLetters.every(l => l.charAt(0) <= "Z")
  );
};

const isSilence = sanitizedMessage => sanitizedMessage === "";

/**
 * @param {String} message
 */
export const hey = message => {
  const sanitizedMessage = sanitizeMessage(message);

  const messageIsQuestion = isQuestion(sanitizedMessage);
  const messageIsYell = isYell(sanitizedMessage);
  const messageIsYelledQuestion = messageIsQuestion && messageIsYell;

  if (messageIsYelledQuestion) {
    return "Calm down, I know what I'm doing!";
  } else if (messageIsQuestion) {
    return "Sure.";
  } else if (messageIsYell) {
    return "Whoa, chill out!";
  } else if (isSilence(sanitizedMessage)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
