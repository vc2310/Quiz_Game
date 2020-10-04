const family_list = {
	0: {
		'relation': 'The first grandchild',
		'name': 'Tom',
		'image': 'images/grandchild1.jpg',
		'options': [['right', 'Tom, The first grandchild'], ['wrong', 'Harry, The first nephew'], ['wrong', 'Alex, The second nephew'], ['wrong', 'Jay, The brother']]
	}, 1: {
		'relation': 'The second grandchild',
		'name': 'Emma',
		'image': 'images/grandchild2.jpg',
		'options': [['right', 'Emma, The second grandchild'], ['wrong', 'Sophia, The first neice'], ['wrong', 'Lily, The second neice'], ['wrong', 'Stella, The third neice']]
	}, 2: {
		'relation': 'The first neice',
		'name': 'Sophia',
		'image': 'images/neice1.jpg',
		'options': [['wrong', 'Emma, The second grandchild'], ['right', 'Sophia, The first neice'], ['wrong', 'Lily, The second neice'], ['wrong', 'Stella, The third neice']]
	}, 3: {
		'relation': 'The second neice',
		'name': 'Lily',
		'image': 'images/neice2.jpg',
		'options': [['wrong', 'Emma, The second grandchild'], ['wrong', 'Sophia, The first neice'], ['right', 'Lily, The second neice'], ['wrong', 'Stella, The third neice']]
	}, 4: {
		'relation': 'The third neice',
		'name': 'Stella',
		'image': 'images/neice3.jpg',
		'options': [['wrong', 'Emma, The second grandchild'], ['wrong', 'Sophia, The first neice'], ['wrong', 'Lily, The second neice'], ['right', 'Stella, The third neice']]
	}, 5: {
		'relation': 'The first nephew',
		'name': 'Harry',
		'image': 'images/nephew1.jpg',
		'options': [['wrong', 'Tom, The first grandchild'], ['right', 'Harry, The first nephew'], ['wrong', 'Alex, The second nephew'], ['wrong', 'Jay, The brother']]
	}, 6: {
		'relation': 'The second nepher',
		'name': 'Alex',
		'image': 'images/nephew2.jpg',
		'options': [['wrong', 'Tom, The first grandchild'], ['wrong', 'Harry, The first nephew'], ['right', 'Alex, The second nephew'], ['wrong', 'Jay, The brother']]
	}, 7: {
		'relation': 'The brother',
		'name': 'Jay',
		'image': 'images/brother.jpg',
		'options': [['wrong', 'Tom, The first grandchild'], ['wrong', 'Harry, The first nephew'], ['wrong', 'Alex, The second nephew'], ['right', 'Jay, The brother']]
	}, 8: {
		'relation': 'The sister',
		'name': 'Gloria',
		'image': 'images/sister.jpg',
		'options': [['right', 'Gloria, The sister'], ['wrong', 'Sophia, The first neice'], ['wrong', 'Lily, The second neice'], ['wrong', 'Stella, The third neice']]
	}
}