module.exports = function useful(buffer) {
  if (buffer > 64 && buffer < 123 && !(buffer > 90 && buffer < 97)) {
    return true;
  }
  return false;
};
