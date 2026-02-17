let cy5 = cytoscape({
  container: document.getElementById('graph5-cy'),
  elements: graph5_roomsize2_weightedgraph_data.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'width' : 40,
        'height': 40
      }
    },
    {
      selector: 'edge',
      style: {
        'control-point-distances': 0,
        'control-point-weights': 0.5,
        'edge-distances': 'node-position',
        'curve-style': 'unbundled-bezier', 
        // 'lineColor': 'black',
        // 'opacity': '0.8'
      }
    },
    {
        selector: 'node.selected',
        style: {
            'background-color': 'green'
        }
    },
    {
        selector: 'node.highlight',
        style: {
            'background-color': 'orange'
        }
    },
    {
        selector: 'node.highlightRight',
        style: {
            'background-color': 'blue'
        }
    },
    {
        selector: 'node.highlightLeft',
        style: {
            'background-color': 'red'
        }
    },
    {
        selector: 'node.semitransp',
        style:{ 'opacity': '0.5' }
    },
    {
        selector: 'edge.highlight',
        style: { 'mid-target-arrow-color': '#FFF', lineColor: 'blue' }
    },
    {
        selector: 'edge.semitransp',
        style:{ 'opacity': '0.2' }
    }
  ],
  layout: {
    name: 'circle',
    fit: true
  }
});

cy5.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy5);
});
cy5.on('mouseout', 'node', function(e){
  dehighlight(cy5);
});

cy5.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy5.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph5-cy') {
    cy5.fit()
  }
  else if (event.fragment.id == 'graph5-1-cy') {
    cy5.fit()
    for(let i = 0; i < cy5.nodes().length-1; i++){
      for(let j = i+1; j < cy5.nodes().length; j++) {
        cy5.add([{group: "edges", data: { id: 'e'+String(i)+String(j), source: String(i), target: String(j)}}])
        await sleep(50)
      }
    }
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph5-cy') {
    cy5.fit()
  }
  else if (event.fragment.id == 'graph5-1-cy') {
    cy5.fit()
    for(let i = 0; i < cy5.nodes().length-1; i++){
      for(let j = i+1; j < cy5.nodes().length; j++) {
        cy5.$id('e'+String(i)+String(j)).remove();
      }
    }
  }
}

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
