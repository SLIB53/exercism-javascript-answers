export class Flattener {
  flatten(arr) {
    return arr.reduce(
      (acc, cur) =>
        acc.concat(
          !Array.isArray(cur)
            ? cur !== undefined && cur !== null
              ? [cur]
              : []
            : this.flatten(cur)
        ),
      []
    );
  }
}
