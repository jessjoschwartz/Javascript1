words = ["I", "do", "not", "like", "green", "eggs", "and", "ham", "I", "do", "not", "like", "them", "San", "I", "am"]

def find_duplicates(words):
    my_dict = {}
    my_list = []
    for word in words:
        my_dict[word] = my_dict.get(word,0) + 1

    for key in my_dict:
        if my_dict[key] > 1:
            my_list.append(key)

    return my_list


print find_duplicates(words)