/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var i = 0; i < 100; i++) {
    console.log(i);
}
   
console.log('loop is done')



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var x = '';

for (var i = 0; i < 7; i++) {
    x = x + '#';
    console.log(x)
}
   