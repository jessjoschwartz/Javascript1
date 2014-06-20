## Return a list of fibonacci numbers that go up to but not beyond the maximum number provided
def fibonacci_set(max):
    if max > 1:
        fib_list = [1]
        current_fib = 1
        while current_fib < max:
            fib_list.append(current_fib)
            current_fib = fib_list[-1] + fib_list[-2]

        return fib_list
    else:
        return [1, 1]

## Tell me if a number is even
def even(n):
    return n % 2 == 0

print sum(filter(even,fibonacci_set(4000000)))