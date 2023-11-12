/**
 ****□□□□****
 **/
class BlockTypeOne {
  constructor() {
    this.widthBlockCount = 4;
    this.widthBlockMarginCount = 0;
    this.heightBlockCount = 1;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#9DC3C1";
    this.shape = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ];
    this.rotationBlueprint = [
      [
        [-2, 1],
        [-1, 1],
        [0, 1],
        [1, 1],
      ],
      [
        [2, -1],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [-2, 1],
        [-1, 1],
        [0, 1],
        [1, 1],
      ],
      [
        [2, -1],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ];
  }
}

/**
 *****□******
 ****□□□*****
 **/
class BlockTypeTwo {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#C89EC4";
    this.shape = [
      [1, 1],
      [2, 0],
      [2, 1],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [0, 0],
        [1, -1],
        [1, 0],
        [2, 0],
      ],
      [
        [1, -1],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
      [
        [-1, 1],
        [0, 1],
        [0, 2],
        [1, 1],
      ],
      [
        [0, 0],
        [1, -1],
        [1, 0],
        [1, 1],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [-1, 1],
        [0, 0],
        [0, 1],
        [1, 1],
      ],
      [
        [1, -1],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
      [
        [0, 0],
        [1, -1],
        [1, 0],
        [1, 1],
      ],
    ];
  }
}

/**
 *****□□*****
 *****□□*****
 **/
class BlockTypeThree {
  constructor() {
    this.widthBlockCount = 2;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#E3E36A";
    this.shape = [
      [1, 0],
      [1, 1],
      [2, 0],
      [2, 1],
    ];
    this.rotationBlueprint = [];
    this.reverseRotationBlueprint = [];
  }
}

/**
 ****□□******
 *****□□*****
 **/
class BlockTypeFour {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#F16B6F";
    this.shape = [
      [1, 0],
      [2, 0],
      [2, 1],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [0, -1],
        [1, -1],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [0, -1],
        [1, -1],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
      ],
    ];
  }
}
/**
 *****□□*****
 ****□□******
 **/
class BlockTypeFive {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#AACD6E";
    this.shape = [
      [1, 1],
      [2, 0],
      [2, 1],
      [3, 0],
    ];
    this.rotationBlueprint = [
      [
        [-1, 1],
        [0, 0],
        [0, 1],
        [1, 0],
      ],
      [
        [1, -1],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [-1, 1],
        [0, 0],
        [0, 1],
        [1, 0],
      ],
      [
        [1, -1],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
    ];
  }
}

/**
 ******□****
 ****□□□****
 **/
class BlockTypeSix {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#FFBC42";
    this.shape = [
      [1, 1],
      [2, 1],
      [3, 0],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
      [
        [0, -2],
        [0, -1],
        [0, 0],
        [1, 0],
      ],
      [
        [0, 1],
        [0, 2],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [0, 2],
        [1, 2],
        [2, 1],
        [2, 2],
      ],
      [
        [0, -1],
        [0, 0],
        [0, 1],
        [1, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [2, 0],
      ],
      [
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
      ],
    ];
  }
}

/**
 ****□*******
 ****□□□****
 **/
class BlockTypeSeven {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 0;
    this.blockColor = "#84B1ED"; 
    this.shape = [
      [1, 0],
      [1, 1],
      [2, 1],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [-1, -1],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
      ],
      [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, 1],
      ],
      [
        [1, 1],
        [2, -1],
        [2, 0],
        [2, 1],
      ],
    ];
    this.reverseRotationBlueprint = [
      [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
      ],
      [
        [-1, -1],
        [0, -1],
        [1, -1],
        [1, 0],
      ],
      [
        [1, 1],
        [2, -1],
        [2, 0],
        [2, 1],
      ],
    ];
  }
}
