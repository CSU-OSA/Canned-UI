const child_process = require('child_process');

const copyDir = (src, dist) => {
  child_process.spawn('cp', ['-r', undefined, src, dist]);
};

copyDir('./packages', './docs');