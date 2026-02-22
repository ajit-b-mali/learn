# LinkedList

- not contigous location in memory
- dynamic size -- size can be increased/decreased anytime
- start point of LinkedList is called **head**
- end point of LinkedList is called **tail**-
- LinkedList is indirectly invisible
- used in stack/queue, in browser

## Singly LinkedList (LL) / 1D LL

1. Introduction to LL
    - [data, next] a node in LL
    - data -- actual data
    - next -- pointer to next node
    - see [code](./lec-1/01-introduction.cpp)
    - in question related to LL, always return head
    - never ever tamper the head
    - array to LL -- O(N)
    - traverse -- O(N)

2. Insert a node in LL
3. Delete a node in LL
    - delete head -- O(1)
    - delete tail -- O(N)
    - delete position -- O(N)
    - delete data -- O(N)

4. Find length of LL
5. Search an element in DLL

## Doubly LinkedList (DLL)

1. Introduction to DLL
2. Insert a node in DLL
3. Delete a node in DLL
4. Reverse a DLL

## Medium proble1ms of LL

1. Middle of LL **TortoiseHare Method**
2. Reverse LL **Iterative**
3. Reverse LL **Recursive**
4. Detect loop in LL
5. Find Starting point in LL
6. Length of loop in LL
7. Check if LL is palindrome or not
8. Segrregate odd and even nodes in LL
9. Remove Nth node from the back of LL
10. Delete middle node of LL
11. Sort LL
12. Sort LL of 0's 1's and 2's by changing link
13. Find intersection of Y LL
14. Add 1 to a number represented by LL
15. Add 2 numbers in LL

## Medium problems of DLL

1. Delete all occurrences of a key in DLL
2. Find pairs with given sum in DLL
3. Remove duplicates from sorted DLL

## Hard problems of LL

1. Reverse LL in group of given size K
2. Rotate a LL
3. Flattening of LL
4. Clone LL with random and next pointer
