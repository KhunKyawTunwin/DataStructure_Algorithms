let tree = [
  {
    id: 1,
    name: "parent",
    children: [
      {
        id: 2,
        name: "child_1",
      },
      {
        id: 3,
        name: "child_2",
        children: [
          {
            id: "4",
            name: "child_2_1",
            children: [],
          },
          {
            id: "5",
            name: "child_2_2",
            children: [],
          },
        ],
      },
    ],
  },
];

function findNodeById(tree, id) {
  let result = null;
  if (tree.id === id) {
    return tree;
  }

  if (Array.isArray(tree.children) && tree.children.length > 0) {
    tree.children.some((node) => {
      const result = findNodeById(node, id);
      return result;
    });
  }
  return result;
}

console.log(findNodeById(tree, 3));
