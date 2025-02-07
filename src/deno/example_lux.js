import { lux } from "@dusk/w3sper";

console.log(lux.formatToDusk(BigInt(1e9))); // "1"
console.log(lux.formatToDusk(123_456_789_989n)); // "123.456789989"
console.log(lux.formatToDusk(1n)); // "0.000000001"
console.log(lux.formatToDusk(5889n)); // "0.000005889"
console.log(lux.formatToDusk(1_000_999_973_939_759_000n)); // "1000999973.939759",
console.log(lux.formatToDusk(9_007_199_254_740_993n)); // "9007199.254740993"
console.log(lux.formatToDusk(10_000_000_001n)); // "10.000000001"
console.log(lux.formatToDusk(3_141_592_653_589_793n)); // "3141592.653589793"
console.log(lux.formatToDusk(123_456_789_012_345_678_901_234_567_890n)); // "123456789012345678901.23456789",

console.log(lux.parseFromDusk("1")); // BigInt(1e9));
console.log(lux.parseFromDusk("123.456789989")); // 123_456_789_989n);
console.log(lux.parseFromDusk("0.000000001")); // 1n);
console.log(lux.parseFromDusk("0.000005889")); // 5889n);
console.log(lux.parseFromDusk("1000999973.939759")); //1_000_999_973_939_759_000n,
console.log(lux.parseFromDusk("9007199.254740993")); // 9_007_199_254_740_993n);
console.log(lux.parseFromDusk("10.000000001")); // 10_000_000_001n);
console.log(lux.parseFromDusk("3141592.653589793")); // 3_141_592_653_589_793n);
console.log(lux.parseFromDusk("123456789012345678901.23456789")); // 123_456_789_012_345_678_901_234_567_890n,
