'use strict'

//calculates the shortest path from a vertex 'targetVertex' to all other vertices in the 'graph' using the 'Bellman-Ford' algorithm
//the input graph structure must have the below structure:
//  [
//     { from: "A", to: "C", cost: 6 },
//     { from: "B", to: "A", cost: 3 },
//     { from: "C", to: "B", cost: -2 },
//     { from: "D", to: "C", cost: 3 },
//     { from: "D", to: "A", cost: 10 },
//  ]
//the input 'targetVertex' is the name of the vertex (e.g. A)
const bellmanFord = (graph, targetVertex) => {
    
        //construct the array of vertices (e.g. [A,B,C,D])
        let vertices = [targetVertex];
    
        //construct the costs dictionary 
        //the cost from the 'targetVertex' to itself will be zero, 
        //the cost from the 'targetVertex' to the rest of the vertices it will be maximum possible 
        //e.g. if A is the 'targetVertex' the dictionary will be: {A: 0, B: Infinity, C: Infinity, D: Infinity}
        let costs = {};
        costs[targetVertex] = 0;
    
        for (var path of graph) {
            if (vertices.lastIndexOf(path.from) < 0) {
                vertices.push(path.from);
                costs[path.from] = Number.POSITIVE_INFINITY;
            }
        }
    
        //calculate the minimum path from each vertex to other vertices
        //the calculation keeps happening until no more shorter paths are found
        for (let vertex of vertices) {
            if (!iterate(graph, vertices, costs)) {
                break;
            }
        }
    
        //return the costs dictionary, that will contain the minimum costs from the 'targetVertex' to all other vertices
        return costs;
    }

const iterate = (graph, vertices, costs) => {

    //in case a shorter path is found return a flag saying it should call iterate again
    let doItAgain = false;

    for (let currentVertex of vertices) {

        //get the edges starting from current vertex
        let currentEdges = graph.filter((path) => {
            return path.from === currentVertex;
        });

        //calculate the new costs as the sum of the 'from' vertex and the connecting edge between the 2 vertices 
        for (var currentEdge of currentEdges) {
            const newCost = costs[currentEdge.from] + currentEdge.cost;

            //if the new cost is lower than existing cost, update the costs dictionary
            if (newCost < costs[currentEdge.to]) {
                costs[currentEdge.to] = newCost;
                doItAgain = true;
            }
        }
    }

    return doItAgain;
}

export default bellmanFord;