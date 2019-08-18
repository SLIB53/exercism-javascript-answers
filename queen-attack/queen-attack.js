export class QueenAttack {
  constructor(args = { white: [0, 3], black: [7, 3] }) {
    if (args.white.every((n, i) => n === args.black[i])) {
      throw new Error("Queens cannot share the same space");
    }

    this.white = args.white;
    this.black = args.black;
  }

  canAttack() {
    const [wx, wy] = this.white;
    const [bx, by] = this.black;

    return bx === wx || by === wy || Math.abs(bx - wx) === Math.abs(by - wy);
  }

  toString() {
    const toBoardImageIndex = ([x, y]) => x * 16 + y * 2;

    const boardImage = [
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
      '_', ' ', '_',  ' ',  '_',  ' ', '_', ' ',  '_',  ' ',  '_', ' ', '_', ' ',  '_',  '\n',
    ];

    boardImage[toBoardImageIndex(this.white)] = "W";
    boardImage[toBoardImageIndex(this.black)] = "B";

    return boardImage.join("");
  }
}
