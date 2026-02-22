from typing import Any


class Fraction:
    def __init__(self, numerator = 10, denominator = 20) -> None:
        self.numerator = numerator
        self.denominator = denominator

    def __str__(self) -> str:
        return f"{self.numerator}/{self.denominator}"
    
    def __call__(self, *args: Any, **kwds: Any) -> Any:
        pass


def add(self: Fraction, other: Fraction) -> Fraction:
    print("adf")


Fraction.__add__ = add

fraction1 = Fraction(10, 20)
fraction2 = Fraction(100, 200)
print(add(fraction1, "10"))