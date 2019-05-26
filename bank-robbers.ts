// https://www.codingame.com/ide/puzzle/bank-robbers


interface Vault {
  charactersLength: number;
  digitsLength: number;
}

interface Robber {
  totalTime: number;
}

const robbersNum = 2;

const robbers: Robber[] = [];

for (let i = 0; i < robbersNum; i++) {
  robbers.push({
    totalTime: 0,
  });
}

const vaults: Vault[] = [
    { charactersLength: 3, digitsLength: 1 },
    { charactersLength: 3, digitsLength: 2 },
    { charactersLength: 4, digitsLength: 0 },
    { charactersLength: 4, digitsLength: 0 }
];

const getVaultTime = function (digits: number, charactersLength: number) {
  if (digits) {
    return Math.pow(10, digits) * Math.pow(5, charactersLength - digits);
  }
  return Math.pow(5, charactersLength);
};

const getLongestVaultTime = function (prevTime: number, curr: Vault) {
  const currTime = getVaultTime(curr.digitsLength, curr.charactersLength);
  return prevTime > currTime ? prevTime : currTime;
};

const getMaxVaultTime = function(vaults: Vault[]) {
  const vaultTime = getVaultTime(vaults[0].digitsLength, vaults[0].charactersLength);
  const maxVaultTime = vaults.reduce(getLongestVaultTime, vaultTime);
  return maxVaultTime;
}

const findFirstAvailableRobber = function (prev: Robber, curr: Robber) {
  return prev.totalTime < curr.totalTime ? prev : curr;
};

const getLastRobber = function (prev: Robber, curr: Robber): Robber {
  return prev.totalTime < curr.totalTime ? curr : prev;
};

const updateRobbers = function (robbers: Robber[]): Robber[] {
  for (const vault of vaults) {
    const availableRobber: Robber = robbers.reduce(findFirstAvailableRobber, {
      totalTime: Number.MAX_SAFE_INTEGER,
    });

    const timeVault = getVaultTime(vault.digitsLength, vault.charactersLength);
    availableRobber.totalTime += timeVault;
  }
  return robbers;
};

if (vaults.length > robbers.length) {
  console.log(updateRobbers(robbers).reduce(getLastRobber).totalTime);
} else {
  console.log(getMaxVaultTime(vaults));
}
