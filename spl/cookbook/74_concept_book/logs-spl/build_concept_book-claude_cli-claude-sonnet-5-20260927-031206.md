# SPL Run: build_concept_book

- **Adapter:** claude_cli
- **Model:** claude-sonnet-5
- **Tokens:** 2570 in / 1818 out
- **Latency:** 72418ms
- **Timestamp:** 2026-09-27 03:12:06

## Output

```output


---

## Social Network

A social network is modeled as a graph $G = (V, E)$, where the vertex set $V$ represents individuals (or organizations), and the edge set $E$ represents a relationship between them — friendship, collaboration, or communication. If the relationship is mutual, the edges are undirected, giving an undirected graph; if it is asymmetric (one person follows another, but not vice versa), the edges are directed, and $G$ is a directed graph. Each edge may also carry a weight representing the strength or frequency of interaction.

Two structural quantities drive most analysis. The degree of a vertex $v$, denoted $\deg(v)$, is the number of edges incident to it — how many direct connections that person has. The graph can also be represented by an adjacency matrix $A$, where $A_{ij} = 1$ if an edge connects vertex $i$ and vertex $j$, and $A_{ij} = 0$ otherwise. For an undirected graph, $A$ is symmetric, and the row sum $\sum_j A_{ij}$ equals $\deg(i)$.

**Worked example.** Consider five students $\{a, b, c, d, e\}$ where friendships are: $a$–$b$, $a$–$c$, $b$–$c$, $c$–$d$, $d$–$e$. Vertex $c$ has degree 3 (connected to $a$, $b$, $d$), while $e$ has degree 1. Notice that $a$, $b$, $c$ form a triangle — a tightly-knit cluster — while $d$ and $e$ are more peripheral. This local density is captured by the clustering coefficient of a vertex $v$:

$$
C(v) = \frac{2 \cdot (\text{number of edges among } v\text{'s neighbors})}{\deg(v)\left(\deg(v) - 1\right)}
$$

For vertex $a$ (neighbors $b$, $c$, connected by one edge), $C(a) = \frac{2 \cdot 1}{2 \cdot 1} = 1$: all of $a$'s friends are also friends with each other.

**Problem-solving application.** These formalisms let you answer concrete questions algorithmically rather than by inspection. To find the shortest chain of acquaintances between two people (the "degrees of separation" problem), run a breadth-first search from one vertex, which finds shortest paths in $O(|V| + |E|)$ time. To identify influential individuals, compute degree centrality (highest $\deg(v)$) or betweenness centrality (vertices lying on many shortest paths, acting as bridges between otherwise disconnected groups). To detect communities — clusters of densely interconnected people, like the $a$-$b$-$c$ triangle above — algorithms partition $V$ to maximize the ratio of within-group edges to between-group edges. These are the same techniques used to design vaccination strategies, rank search results, and detect coordinated inauthentic behavior on real platforms.

---

## Affiliation Network

An affiliation network is a two-mode (bipartite) graph containing two distinct sets of nodes — actors and events — where edges connect only across the sets, never within one. An actor is linked to an event if that actor participated in it: an employee to the committees they sit on, a scientist to the papers they co-author, a shareholder to the boards they join. No actor-to-actor or event-to-event edges exist directly; any relationship between two actors is inferred through the events they share.

Formally, an affiliation network is represented by a biadjacency matrix $A$ of size $n \times m$, where $n$ is the number of actors and $m$ is the number of events, and $A_{ij} = 1$ if actor $i$ participated in event $j$ (0 otherwise). This matrix is the key computational object: from it, we derive one-mode "projections" that reveal indirect ties. The actor-actor projection is given by

$$
P_{\text{actor}} = A A^{T}
$$

where entry $(P_{\text{actor}})_{ik}$ counts the number of events actors $i$ and $k$ both attended — a measure of how strongly they are indirectly connected. Symmetrically, the event-event projection $P_{\text{event}} = A^{T} A$ counts shared actors between pairs of events.

**Worked example.** Suppose three researchers — Ana, Ben, and Cara — worked on four papers as follows: Ana on papers 1 and 2, Ben on papers 2 and 3, Cara on papers 3 and 4. The biadjacency matrix is 3×4. Computing $A A^{T}$ shows Ana and Ben share one paper (paper 2), Ben and Cara share one paper (paper 3), and Ana and Cara share zero papers. This immediately reconstructs a co-authorship network — a one-mode graph — purely from bipartite participation data, without ever recording a direct Ana-Cara relationship.

**Problem-solving application.** Given raw affiliation data (e.g., a spreadsheet of students and the clubs they belong to), the standard workflow is: (1) encode the data as a biadjacency matrix, (2) compute the desired projection via matrix multiplication, (3) threshold or weight the resulting matrix (since raw shared-event counts can overstate weak ties, e.g., large events inflate co-membership counts artificially), and (4) analyze the projected one-mode network using standard techniques such as centrality or clustering. This projection-then-analyze pattern underlies applications from board-interlock studies in corporate governance to detecting hidden communities in co-authorship and voting-bloc data.

---

## Payoff

A social network answers "who is connected to whom," but many real ties are never recorded directly — two board members who never speak may still shape each other's decisions because they sit on the same corporate board, and two researchers who have never met may share an entire research agenda because they co-author with the same collaborators. An affiliation network captures exactly this: a bipartite structure with two disjoint sets of nodes, actors and events, where every edge runs between the two sets (an actor "attends" or "belongs to" an event) and never within a set. Formally, if $A$ is the $n \times m$ affiliation matrix with $A_{ij} = 1$ when actor $i$ participates in event $j$, the actor-to-actor social network implied by shared events is the one-mode projection

$$P = AA^{\top},$$

where entry $P_{ik}$ counts the number of events actors $i$ and $k$ have in common, and the diagonal $P_{ii}$ gives the number of events actor $i$ attended.

This is the natural endpoint of the concept-book because it is where the social network idea, built from raw pairwise ties, is generalized to handle relationships that are mediated rather than direct. Everything a social network offers — degree, clustering, centrality, community structure — can now be computed on $P$ (or its event-side twin $AA^{\top}$ replaced by $A^{\top}A$ for event-to-event overlap), but the underlying data no longer requires anyone to report "who knows whom." It only requires records of co-membership: committee rosters, co-authorship, interlocking directorates, or attendance logs. This is precisely why affiliation networks are the workhorse of empirical social network research — they let analysts infer influence and community from institutional records that are far easier to collect than confessions of friendship.

Try it yourself: take a small dataset — say, five students and the three clubs they belong to — build the $5 \times 3$ affiliation matrix, compute $P = AA^{\top}$, and read off which pairs of students share the most clubs. Then ask what the projection loses: two students who overlap in three small clubs look identical in $P$ to two who overlap in one large one, unless you weight the projection by event size. That question is where affiliation network analysis truly begins.
```
