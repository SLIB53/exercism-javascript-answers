export const encode = integers =>
  integers
    .map(int => {
      let bitStream = int;
      let bytesBuffer = [bitStream & 0x7f];
      while ((bitStream = bitStream >>> 7)) {
        bytesBuffer.unshift((bitStream & 0x7f) | 0x80);
      }

      return bytesBuffer;
    })
    .reduce((acc, bytes) => acc.concat(bytes), []);

export const decode = bytes => {
  if (bytes[bytes.length - 1] & 0x80) throw new Error("Incomplete sequence");

  return bytes
    .reduceRight((acc, b) => {
      if (~b & 0x80) acc.push([]);

      acc[acc.length - 1].unshift(b);

      return acc;
    }, [])
    .map(encoding => {
      let bitStream = 0;

      for (const b of encoding) {
        bitStream = (bitStream << 7) | (b & 0x7f);
      }

      return [bitStream >>> 0]; // HACK: >>> 0 coerces to unsigned integer
    })
    .reduceRight((acc, bytes) => acc.concat(bytes), []);
};
