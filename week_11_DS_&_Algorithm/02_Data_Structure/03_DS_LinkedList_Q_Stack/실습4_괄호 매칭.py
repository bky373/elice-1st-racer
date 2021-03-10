def isParenthesisValid(data):
    st = []
    left_right = {
                    ')' : '(', 
                    '}' : '{', 
                    ']' : '[', 
                    '>' : '<'
                }
    lefts = ['(', '{', '[', '<']
    
    for d in data:
        if d in lefts:
            st.append(d)
        else:
            if not st: return False
            
            left = st.pop()
            if left != left_right[d]:
                return False
    if st: return False
    return True

def main():
    examples = ["({()})", "[]<>{}", ")(" "<]", "<(>)"]
    for example in examples:
        print(example, isParenthesisValid(example))

    
if __name__ == "__main__":
    main()