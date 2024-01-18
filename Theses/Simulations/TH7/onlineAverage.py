class OnlineAverageCalculator:
    def __init__(self):
        self.count = 0
        self.running_sum = 0

    def update(self, new_number):
        self.count += 1
        self.running_sum += new_number
        return self.running_sum / self.count

# Example of using the OnlineAverageCalculator
average_calculator = OnlineAverageCalculator()

# Simulating an online stream of numbers
new_numbers = [7, 4, 32, 22, 10]

for number in new_numbers:
    current_average = average_calculator.update(number)
    print(f"Current average: {current_average}")

