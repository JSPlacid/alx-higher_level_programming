#!/usr/bin/python3
''' Module: 1-my_list
'''


class MyList(list):


    def print_sorted(self):
        '''
        prints the list, but sorted
        '''
        print(sorted(self))
