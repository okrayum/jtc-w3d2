# test_sum_even_numbers.py

import unittest
from sum_even_numbers import sum_even_numbers

class TestSumEvenNumbers(unittest.TestCase):
    
    def test_sum_even_numbers(self):
        # Test case 1: List with even and odd numbers
        self.assertEqual(sum_even_numbers([1, 2, 3, 4, 5, 6]), 12)
        
        # Test case 2: List with only even numbers
        self.assertEqual(sum_even_numbers([2, 4, 6, 8, 10]), 30)
        
        # Test case 3: List with only odd numbers
        self.assertEqual(sum_even_numbers([1, 3, 5, 7, 9]), 0)
        
        # Test case 4: Empty list
        self.assertEqual(sum_even_numbers([]), 0)
        
        # Test case 5: List with negative numbers
        self.assertEqual(sum_even_numbers([-2, -4, -6, -8, -10]), -30)
        
if __name__ == '__main__':
    unittest.main()
