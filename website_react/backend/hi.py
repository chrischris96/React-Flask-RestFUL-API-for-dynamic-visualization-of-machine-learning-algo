def me(string):
    print(string)
me('hello')

if __name__ == '__main__':
    # Do some local work which should not be reflected while importing this file to another module.
    me('hello')
