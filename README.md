# ngZoo
A simple demonstration of transclusion and isolate scopes in AngularJS

This is a simple e-zoo app that children and grandparents alike will find immersive and enjoyable.

There are two directives, a "zoo" directive and two instances of the "exhibit" directive. These are injected into the zoo directive via transclusion.

The two isolate scopes of the transcluded exhibit directives are siblings of one another.
They are very similar and act like two instances of the same component. 
They however have seperate scopes; their scopes are siblings of one another.
Thus, interaction with one directive does not touch with the scope of its sibling 
