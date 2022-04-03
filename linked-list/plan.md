### Writing a Program with Abstract Data Types

http://web.mit.edu/6.031/www/sp21/classes/10-abstract-data-types/
https://web.mit.edu/6.031/www/sp21/classes/19-programming-with-adts/

### BASIC OPERATIONS:

#### Some of the basic operations that can be performed on a linked list are

1. Traversing a linked list.
2. Prepending a new node (to the beginning) of the list
3. Appending a new node (to the end) of the list
4. Adding a new node (to Nth index) of the list
5. Inserting a new node to a specific position on the list
6. Deleting a node from the list
7. Updating the data of a linked list node

#### Some of the advanced operations

1. Get node value by its index
2. Deleting a node by its index
3. Deleting a node by its value
4. Deleting a node from the beginning
5. Deleting a node from the end
6. Reversing the list
7. Detecting if the list has loop (cycle)
8. Removing duplicates form the list
9. Converting list values to array
10. Search the list for node's value
11. Union 2 lists <TODO>
12. Intersect 2 lists <TODO>

#### Other types of linked list

1. Doubly
2. Circular

### Specific test cases

1. Empty Linked List
   A. Check the length property
   B. Try to remove a node
2. Prepending a new node (to the beginning) of the list
   A. getFirst returns the object you inserted
   B. length returns the old length plus one
   C. the output of toString includes the object inserted
3. Appending a new node (to the end) of the list
   A. getLast returns the object you inserted
   B. length returns the old length plus one
   C. the output of toString includes the object inserted
4.

### General test cases

1. Traversing an empty Linked List
2. Traversing non empty Linked List
3. Deleting from the list
4. Inserting into the list
5. Inserting a sub-list into the linked list
6. Traversing the list backwards (if doubly-linked list)
7. Concurrency tests (if applicable): race condition tests
8. Linked list with a loop
9. Linked List with all dups
10. Linked List with one node or 2 nodes (2 dups)
11. No duplicates
12. The list could encounter integer over flow, incase low memory (depending on 32 bit machine, 64 bit machine)
13. Security -> what level of permission is required to use the API, roles etc
14. Memory - > How much memory is consumed when this API is used; Does it affect performance?
15. Compatibility testing - > testing the suite using this API on different platforms, windows, MAC, Unix etc.
16. Stress testing -> Invoke the API by using a master slave architecture and parallel processing on different clients.
