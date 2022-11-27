/* eslint-disable no-undef */
import { cubeRoot } from '../src/app/operations/cubeRoot';
import {
  secondDegree,
  tenInDegree,
  thirdDegree,
} from '../src/app/operations/degrees';
import { division } from '../src/app/operations/division';
import { factorial } from '../src/app/operations/factorial';
import { multiplication } from '../src/app/operations/multiplication';
import { onex } from '../src/app/operations/onex';
import { percent } from '../src/app/operations/percent';
import { squareRoot } from '../src/app/operations/squareRoot';
import { substraction } from '../src/app/operations/substraction';
import { sum } from '../src/app/operations/sum';
import { xyDegree } from '../src/app/operations/xyDegree';
import { xyRoot } from '../src/app/operations/xyRoot';

test('Проверка функции сложения..', () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(0.1, 0.3)).toBe(0.4);
  expect(sum(10, 20)).toBe(30);
  expect(sum(0.5, 0.5)).toBe(1);
  expect(sum(100, 150)).toBe(250);
  expect(sum(9, 8)).toBe(17);
});

test('Проверка функции вычитания..', () => {
  expect(substraction(1, 3)).toBe(-2);
  expect(substraction(0.3, 0.2)).toBe(0.1);
  expect(substraction(10, 20)).toBe(-10);
  expect(substraction(0.5, 0.5)).toBe(0);
  expect(substraction(320, 150)).toBe(170);
  expect(substraction(9, 8)).toBe(1);
});

test('Проверка функции умножения..', () => {
  expect(multiplication(1, 0)).toBe(0);
  expect(multiplication(0.3, 0.2)).toBe(0.06);
  expect(multiplication(5, -4)).toBe(-20);
  expect(multiplication(3, 10)).toBe(30);
  expect(multiplication(10, 20)).toBe(200);
  expect(multiplication(0.5, 2)).toBe(1);
});

test('Проверка функции деления..', () => {
  expect(division(0.3, 0.2)).toBe(1.5);
  expect(division(5, 1)).toBe(5);
  expect(() => {
    division(1, 0);
  }).toThrow();
  expect(division(0, 10)).toBe(0);
  expect(division(10, 20)).toBe(0.5);
  expect(division(4, 2)).toBe(2);
  expect(division(30, 3)).toBe(10);
});

test('Проверка функции 1/x..', () => {
  expect(onex('1')).toBe(1);
  expect(onex('4')).toBe(0.25);
  expect(onex('8')).toBe(0.125);
  expect(onex('2')).toBe(0.5);
  expect(onex('10')).toBe(0.1);
  expect(onex('100')).toBe(0.01);
  expect(() => {
    onex('0');
  }).toThrow();
});

test('Проверка функции x в степени y..', () => {
  expect(xyDegree(10, 0)).toBe(1);
  expect(xyDegree(5, 2)).toBe(25);
  expect(xyDegree(0.1, 3)).toBe(0.001);
  expect(xyDegree(3, 4)).toBe(81);
  expect(xyDegree(-3, 4)).toBe(81);
  expect(xyDegree(0.5, 2)).toBe(0.25);
  expect(xyDegree(-2, 3)).toBe(-8);
  expect(xyDegree(4, 0.5)).toBe(2);
  expect(xyDegree(27, 1 / 3)).toBe(3);
});

test('Проверка функции корень из x степени y..', () => {
  expect(xyRoot(10, 1)).toBe(10);
  expect(xyRoot(25, 2)).toBe(5);
  expect(xyRoot(81, 2)).toBe(9);
  expect(xyRoot(0.125, 3)).toBe(0.5);
  expect(xyRoot(10000, 4)).toBe(10);
  expect(xyRoot(25, 0.5)).toBe(625);
  expect(() => {
    xyRoot(2, 0);
  }).toThrow();
  expect(() => {
    xyRoot(-9, 2);
  }).toThrow();
});

test('Проверка функции %..', () => {
  expect(percent('1')).toBe(0.01);
  expect(percent('7')).toBe(0.07);
  expect(percent('8')).toBe(0.08);
  expect(percent('100')).toBe(1);
  expect(percent('1000')).toBe(10);
});

test('Проверка функции x^2..', () => {
  expect(secondDegree('1')).toBe(1);
  expect(secondDegree('-7')).toBe(49);
  expect(secondDegree('10')).toBe(100);
  expect(secondDegree('-5')).toBe(25);
  expect(secondDegree('0.1')).toBe(0.01);
  expect(secondDegree('0.01')).toBe(0.0001);
});

test('Проверка функции x^3..', () => {
  expect(thirdDegree('1')).toBe(1);
  expect(thirdDegree('-7')).toBe(-343);
  expect(thirdDegree('10')).toBe(1000);
  expect(thirdDegree('3')).toBe(27);
  expect(thirdDegree('0.1')).toBe(0.001);
  expect(thirdDegree('-10')).toBe(-1000);
  expect(thirdDegree('8')).toBe(512);
  expect(thirdDegree('0.5')).toBe(0.125);
});

test('Проверка функции 10^x..', () => {
  expect(tenInDegree('2')).toBe(100);
  expect(tenInDegree('0')).toBe(1);
  expect(tenInDegree('5')).toBe(100000);
  expect(tenInDegree('3')).toBe(1000);
});

test('Проверка функции x!..', () => {
  expect(factorial('2')).toBe(2);
  expect(factorial('0')).toBe(1);
  expect(factorial('5')).toBe(120);
  expect(factorial('8')).toBe(40320);
  expect(factorial('10')).toBe(3628800);
  expect(() => {
    factorial('0.5');
  }).toThrow();
  expect(() => {
    factorial('-5');
  }).toThrow();
});

test('Проверка функции кубический корень..', () => {
  expect(cubeRoot('1')).toBe(1);
  expect(cubeRoot('0')).toBe(0);
  expect(cubeRoot('125')).toBe(5);
  expect(cubeRoot('1000')).toBe(10);
  expect(cubeRoot('-1000')).toBe(-10);
  expect(cubeRoot('0.125')).toBe(0.5);
  expect(cubeRoot('-0.001')).toBe(-0.1);
  expect(cubeRoot('27')).toBe(3);
  expect(cubeRoot('15625')).toBe(25);
});

test('Проверка функции квадратный корень..', () => {
  expect(squareRoot('1')).toBe(1);
  expect(squareRoot('0')).toBe(0);
  expect(squareRoot('0.25')).toBe(0.5);
  expect(squareRoot('100')).toBe(10);
  expect(squareRoot('16')).toBe(4);
  expect(squareRoot('81')).toBe(9);
  expect(squareRoot('1024')).toBe(32);
  expect(() => {
    squareRoot('-100');
  }).toThrow();
});
