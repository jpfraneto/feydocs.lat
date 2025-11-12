# FEY Protocol - Cast Commands Reference

All commands are tested against Base mainnet. Replace variable placeholders with actual values.

## Core Contract State

### Factory (0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d)

```bash
# Check if factory is deprecated
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "deprecated()(bool)" --rpc-url https://mainnet.base.org

# Get base token (FEY)
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "baseToken()(address)" --rpc-url https://mainnet.base.org

# Get team fee recipient
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "teamFeeRecipient()(address)" --rpc-url https://mainnet.base.org

# Get fee locker address
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "feeLocker()(address)" --rpc-url https://mainnet.base.org

# Get bootstrap address
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "bootstrap()(address)" --rpc-url https://mainnet.base.org

# Check if fee recipient is frozen
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "freezeFeeRecipient()(bool)" --rpc-url https://mainnet.base.org

# Check if fee locker is frozen
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d "feeLockerFrozen()(bool)" --rpc-url https://mainnet.base.org

# Get deployment info for a token
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "tokenDeploymentInfo(address)((address,address,address,address[]))" \
  [TOKEN_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Check if hook is enabled
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "enabledHooks(address)(bool)" [HOOK_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Check if locker is enabled for hook
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "enabledLockers(address,address)(bool)" [LOCKER_ADDRESS] [HOOK_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Check if extension is enabled
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "enabledExtensions(address)(bool)" [EXTENSION_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Check if MEV module is enabled
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "enabledMevModules(address)(bool)" [MEV_MODULE_ADDRESS] \
  --rpc-url https://mainnet.base.org
```

### FEY Token (0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D)

```bash
# Get token name and symbol
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "name()(string)" --rpc-url https://mainnet.base.org
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "symbol()(string)" --rpc-url https://mainnet.base.org

# Get total supply (should be 100B)
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "totalSupply()(uint256)" --rpc-url https://mainnet.base.org

# Get decimals
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "decimals()(uint8)" --rpc-url https://mainnet.base.org

# Check balance of address
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  "balanceOf(address)(uint256)" [ADDRESS] \
  --rpc-url https://mainnet.base.org

# Get all token metadata
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  "allData()(address,address,string,string,string)" \
  --rpc-url https://mainnet.base.org

# Get current admin
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "admin()(address)" --rpc-url https://mainnet.base.org

# Get original admin
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "originalAdmin()(address)" --rpc-url https://mainnet.base.org

# Check if token is verified
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "isVerified()(bool)" --rpc-url https://mainnet.base.org

# Get image URL
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "imageUrl()(string)" --rpc-url https://mainnet.base.org

# Get metadata
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "metadata()(string)" --rpc-url https://mainnet.base.org

# Get context
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D "context()(string)" --rpc-url https://mainnet.base.org
```

### Hook (0x5B409184204b86f708d3aeBb3cad3F02835f68cC)

```bash
# Get factory address
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "factory()(address)" --rpc-url https://mainnet.base.org

# Get base token
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "baseToken()(address)" --rpc-url https://mainnet.base.org

# Get WETH address
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "weth()(address)" --rpc-url https://mainnet.base.org

# Get pool extension allowlist
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "poolExtensionAllowlist()(address)" --rpc-url https://mainnet.base.org

# Check if FEY is token0 for pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "feyIsToken0(bytes32)(bool)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get locker for pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "locker(bytes32)(address)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get MEV module for pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "mevModule(bytes32)(address)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Check if MEV module is enabled for pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "mevModuleEnabled(bytes32)(bool)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get pool creation timestamp
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "poolCreationTimestamp(bytes32)(uint256)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get pool extension for pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "poolExtension(bytes32)(address)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Check if pool extension is setup
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "poolExtensionSetup(bytes32)(bool)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get FEY fee for pool (FEY → Paired direction)
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "feyFee(bytes32)(uint24)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get paired fee for pool (Paired → FEY direction)
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "pairedFee(bytes32)(uint24)" [POOL_ID] \
  --rpc-url https://mainnet.base.org

# Get current protocol fee
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "protocolFee()(uint24)" --rpc-url https://mainnet.base.org

# Get constants
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "MAX_LP_FEE()(uint24)" --rpc-url https://mainnet.base.org
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "MAX_MEV_LP_FEE()(uint24)" --rpc-url https://mainnet.base.org
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "MAX_MEV_MODULE_DELAY()(uint256)" --rpc-url https://mainnet.base.org
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC "PROTOCOL_FEE_NUMERATOR()(uint256)" --rpc-url https://mainnet.base.org
```

### Fee Locker (0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6)

```bash
# Get vault address
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 "vault()(address)" --rpc-url https://mainnet.base.org

# Get bootstrap address
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 "bootstrap()(address)" --rpc-url https://mainnet.base.org

# Check if address is allowed depositor
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 \
  "allowedDepositors(address)(bool)" [ADDRESS] \
  --rpc-url https://mainnet.base.org

# Get available fees for owner and token
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 \
  "availableFees(address,address)(uint256)" [FEE_OWNER] [TOKEN_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Get fees to claim mapping
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 \
  "feesToClaim(address,address)(uint256)" [FEE_OWNER] [TOKEN_ADDRESS] \
  --rpc-url https://mainnet.base.org
```

### LP Locker (0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa)

```bash
# Get version
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "version()(string)" --rpc-url https://mainnet.base.org

# Get factory address
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "factory()(address)" --rpc-url https://mainnet.base.org

# Get fee locker address
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "feeLocker()(address)" --rpc-url https://mainnet.base.org

# Get position manager address
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "positionManager()(address)" --rpc-url https://mainnet.base.org

# Get permit2 address
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "permit2()(address)" --rpc-url https://mainnet.base.org

# Get token reward info
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa \
  "tokenRewards(address)" [TOKEN_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Get constants
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "BASIS_POINTS()(uint256)" --rpc-url https://mainnet.base.org
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "MAX_REWARD_PARTICIPANTS()(uint256)" --rpc-url https://mainnet.base.org
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa "MAX_LP_POSITIONS()(uint256)" --rpc-url https://mainnet.base.org
```

### Pool Extension Allowlist (0xFD549237CdEAbDc14438CAF3f3861e174fDEae46)

```bash
# Check if extension is enabled
cast call 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46 \
  "enabledExtensions(address)(bool)" [EXTENSION_ADDRESS] \
  --rpc-url https://mainnet.base.org

# Check if address is admin
cast call 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46 \
  "admins(address)(bool)" [ADDRESS] \
  --rpc-url https://mainnet.base.org
```

## Pool State (FEY/WETH)

Pool ID: `0xe155c517c53f078f4b443c99436e42c1b80fd2fb1b3508f431c46b8365e4f3f0`

```bash
# Get specific pool state using the known pool ID
POOL_ID="0xe155c517c53f078f4b443c99436e42c1b80fd2fb1b3508f431c46b8365e4f3f0"

# Check if FEY is token0 in main pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "feyIsToken0(bytes32)(bool)" $POOL_ID \
  --rpc-url https://mainnet.base.org

# Get locker for main pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "locker(bytes32)(address)" $POOL_ID \
  --rpc-url https://mainnet.base.org

# Get FEY fee for main pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "feyFee(bytes32)(uint24)" $POOL_ID \
  --rpc-url https://mainnet.base.org

# Get paired fee for main pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "pairedFee(bytes32)(uint24)" $POOL_ID \
  --rpc-url https://mainnet.base.org

# Check MEV module status for main pool
cast call 0x5B409184204b86f708d3aeBb3cad3F02835f68cC \
  "mevModuleEnabled(bytes32)(bool)" $POOL_ID \
  --rpc-url https://mainnet.base.org
```

## Fee Balances

```bash
# Check factory WETH balance
cast call 0x4200000000000000000000000000000000000006 \
  "balanceOf(address)(uint256)" 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  --rpc-url https://mainnet.base.org

# Check factory FEY balance
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  "balanceOf(address)(uint256)" 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  --rpc-url https://mainnet.base.org

# Check team fee recipient FEY balance
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  "balanceOf(address)(uint256)" 0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50 \
  --rpc-url https://mainnet.base.org

# Check available fees for team recipient in fee locker
cast call 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 \
  "availableFees(address,address)(uint256)" \
  0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50 \
  0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  --rpc-url https://mainnet.base.org
```

## Operational Commands

These commands require a private key and gas.

```bash
# Claim WETH fees from factory (anyone can call)
cast send 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "claimWethFees()" \
  --private-key $PRIVATE_KEY --rpc-url https://mainnet.base.org

# Claim FEY fees from factory (anyone can call)
cast send 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "claimBaseTokenFees()" \
  --private-key $PRIVATE_KEY --rpc-url https://mainnet.base.org

# Collect rewards for a token (anyone can call)
cast send 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa \
  "collectRewards(address)" [TOKEN_ADDRESS] \
  --private-key $PRIVATE_KEY --rpc-url https://mainnet.base.org

# Claim personal fees from fee locker
cast send 0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6 \
  "claim(address,address)" [FEE_OWNER] [TOKEN_ADDRESS] \
  --private-key $PRIVATE_KEY --rpc-url https://mainnet.base.org
```

## Example Queries with Real Data

```bash
# Query FEY token deployment info
cast call 0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d \
  "tokenDeploymentInfo(address)((address,address,address,address[]))" \
  0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  --rpc-url https://mainnet.base.org

# Should return:
# (0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D, 0x5B409184204b86f708d3aeBb3cad3F02835f68cC, 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa, [0x173077c319c38bb08D4C4968014357fd518446b4, 0x173077c319c38bb08D4C4968014357fd518446b4, 0x173077c319c38bb08D4C4968014357fd518446b4, 0x173077c319c38bb08D4C4968014357fd518446b4])

# Query FEY token rewards info
cast call 0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa \
  "tokenRewards(address)" 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  --rpc-url https://mainnet.base.org

# Should return TokenRewardInfo struct with:
# - token: 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D
# - poolKey: (currencies, fee, tickSpacing, hooks)  
# - positionId: 484132
# - numPositions: 1
# - rewardBps: [10000]
# - rewardAdmins: [0xD2a5dCA128C2e37a4B687d64D01eE67dD3875768]
# - rewardRecipients: [0x72f5565Ab147105614ca4Eb83ecF15f751Fd8C50]

# Query FEY total supply
cast call 0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D \
  "totalSupply()(uint256)" --rpc-url https://mainnet.base.org
# Should return: 100000000000000000000000000000 (100B * 10^18)

# Check if dev buy extension is enabled
cast call 0xFD549237CdEAbDc14438CAF3f3861e174fDEae46 \
  "enabledExtensions(address)(bool)" 0x173077c319c38bb08D4C4968014357fd518446b4 \
  --rpc-url https://mainnet.base.org
# Should return: true
```

## Environment Variables

```bash
# Set these for easier command usage
export RPC_URL="https://mainnet.base.org"
export FACTORY="0x8EEF0dC80ADf57908bB1be0236c2a72a7e379C2d"
export FEY_TOKEN="0xD09cf0982A32DD6856e12d6BF2F08A822eA5D91D"
export HOOK="0x5B409184204b86f708d3aeBb3cad3F02835f68cC"
export FEE_LOCKER="0xf739FC4094F3Df0a1Be08E2925b609F3C3Aa13c6"
export LP_LOCKER="0x975aF6a738f502935AFE64633Ad3EA2A3eb3e7Fa"
export POOL_ID="0xe155c517c53f078f4b443c99436e42c1b80fd2fb1b3508f431c46b8365e4f3f0"

# Then use in commands like:
cast call $FEY_TOKEN "totalSupply()(uint256)" --rpc-url $RPC_URL
cast call $HOOK "feyFee(bytes32)(uint24)" $POOL_ID --rpc-url $RPC_URL
```