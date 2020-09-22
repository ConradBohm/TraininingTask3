import sys

def calculator(string):
    print(str(eval(string)))

if __name__ == "__main__":
    calculator(str(sys.argv[1]))