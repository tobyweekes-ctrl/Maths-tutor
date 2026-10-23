/* Statistics and Mechanics Year 1 · Chapter 1 Data collection (sections 1.1 to 1.5) */
BOOK_CHAPTERS.push({ id:'A01', book:'Statistics & Mechanics Year 1', label:'Chapter 1', title:'Data collection', sections:[
  { id:'A1.1', num:'1.1', title:'Populations and samples' },
  { id:'A1.2', num:'1.2', title:'Sampling' },
  { id:'A1.3', num:'1.3', title:'Non-random sampling' },
  { id:'A1.4', num:'1.4', title:'Types of data' },
  { id:'A1.5', num:'1.5', title:'The large data set' }
]});

CONTENT['A1.1'] = {
notes: R`
### Key words
- **Population:** the whole set of items you're interested in.
- **Census:** observes or measures **every** member of the population.
- **Sample:** a selection of some of the population.
- **Sampling unit:** one individual member that could be sampled.
- **Sampling frame:** a list of the sampling units, used to choose the sample.

### Census or sample?
| | Advantages | Disadvantages |
|---|---|---|
| Census | completely accurate result | slow and expensive; hard to process lots of data; impossible if testing destroys the item |
| Sample | quicker, cheaper, less data | may not represent the population; natural variation between samples |

Larger samples usually give better estimates, but cost more.

::: booklet
**Not in the formula booklet:** these definitions.
:::

### Worked example 1
A head teacher wants the views of all $1200$ students on a new timetable. Give one reason to use a census and one reason to use a sample.
- Census: every student's view is heard, so the result is fully accurate.
- Sample: it's quicker and cheaper than surveying $1200$ students.

### Worked example 2: when a census is impossible
A factory wants to know how long its light bulbs last. Explain why a census is unsuitable.
- Measuring a bulb's lifetime means using it until it fails. Testing every bulb would destroy the whole stock.

**The trap:** answering "it would take too long". That's true of many censuses; here the key reason is that testing is **destructive**.

### Watch out
- In context questions, always refer to the situation (bulbs, students), not just general words.
`,
questions: [
Q('A1.1-1', 1, R`Explain what is meant by a **population** in statistics. [[1]]`,
  [R`It's not always people.`, R`The whole group of interest.`],
  [R`|B1|The whole set of items that are of interest`], R`The whole set of items of interest`,
  R`For example, all the bulbs made by a factory in a week, or all the students in a school.`),
Q('A1.1-2', 1, R`Explain what is meant by a **census**. [[1]]`,
  [R`How many members are measured?`, R`All of them.`],
  [R`|B1|An observation or measurement of every member of the population`], R`Every member of the population is measured`,
  R`A census includes the entire population, not a selection.`),
Q('A1.1-3', 1, R`Give one advantage of taking a sample rather than a census. [[1]]`,
  [R`Think about time and cost.`, R`Or the amount of data to handle.`],
  [R`|B1|E.g. cheaper / quicker / less data to process`], R`E.g. it is cheaper and quicker`,
  R`A sample needs fewer observations, so it costs less and gives results sooner.`),
Q('A1.1-4', 2, R`A factory makes batteries. Explain why a census is not suitable for finding how long the batteries last. [[2]]`,
  [R`How do you measure a battery's lifetime?`, R`What happens to it?`],
  [R`|B1|Testing involves using a battery until it runs out`, R`|B1|So every battery would be used up / none left to sell`], R`Testing is destructive`,
  R`To find the lifetime you must run each battery until it's flat. Testing all of them would leave nothing to sell.`),
Q('A1.1-5', 2, R`A gym wants to survey its members using its membership list. Identify **(a)** the sampling unit **(b)** the sampling frame. [[2]]`,
  [R`The sampling unit is one individual.`, R`The frame is the list used.`],
  [R`(a)|B1|A gym member`, R`(b)|B1|The membership list`], R`(a) a gym member (b) the membership list`,
  R`Each member is a sampling unit; the list of all members is the sampling frame.`),
Q('A1.1-6', 2, R`A council considers a census of all $80\,000$ residents of a town. Give one advantage and one disadvantage. [[2]]`,
  [R`Accuracy versus practicality.`, R`$80\,000$ is a lot of people.`],
  [R`|B1|Advantage: completely accurate / every resident's view included`, R`|B1|Disadvantage: time-consuming, expensive, hard to process so much data`], R`Accurate; but slow and expensive`,
  R`A census gives an exact picture but would be very costly for $80\,000$ people.`),
Q('A1.1-7', 2, R`A council interviews $50$ people in the high street on a Monday morning to find out what the town's residents think of a new car park. State the population, and give one reason why the sample may not be representative. [[2]]`,
  [R`Who is the council interested in?`, R`Who is in the high street on a Monday morning?`],
  [R`|B1|Population: the town's residents`, R`|B1|E.g. people at work/school are missed; visitors who aren't residents may be included`], R`Residents; e.g. misses working people`,
  R`Weekday-morning shoppers aren't typical: many working residents won't be there, and some people there may not live in the town.`),
Q('A1.1-8', 3, R`Explain the difference between a **sample** and a **sampling frame**. [[2]]`,
  [R`One is a list of everyone who could be chosen.`, R`The other is who was actually chosen.`],
  [R`|B1|Sampling frame: a list of the sampling units from which the sample is chosen`, R`|B1|Sample: the units actually selected`], R`See solution`,
  R`The frame is the list (e.g. all registered voters); the sample is the selection from it (e.g. $100$ of those voters).`),
Q('A1.1-9', 3, R`Explain why larger samples usually give better estimates of a population, and why statisticians don't always use very large samples. [[2]]`,
  [R`Think about natural variation.`, R`Think about cost.`],
  [R`|B1|Larger samples reduce the effect of natural variation, so estimates are more reliable`, R`|B1|But they take more time and money`], R`Less variability; more cost`,
  R`Different samples give different results; with more data the results vary less. But each extra observation costs time and money.`),
Q('A1.1-10', 3, R`A quality controller tests $10$ items from each batch of $500$. Is this a census? State the sampling unit, and give a reason a sample is used. [[3]]`,
  [R`Are all $500$ items tested?`, R`What is one thing that could be tested?`],
  [R`|B1|No, it's a sample`, R`|B1|Sampling unit: one item`, R`|B1|E.g. cheaper/quicker, or testing may damage items`], R`Not a census; an item`,
  R`Only $10$ of $500$ items are tested, so it is a sample. Each item is a sampling unit.`),
Q('A1.1-11', 3, R`A teacher wants to know the average homework time for her class of $30$ students. Explain why a census is sensible here. [[2]]`,
  [R`How big is the population?`, R`Is it easy to ask everyone?`],
  [R`|B1|The population is small ($30$)`, R`|B1|So it is quick and cheap to ask everyone and get an accurate answer`], R`Small, easy to reach, accurate`,
  R`With only $30$ students, a census costs little and removes sampling variation.`),
Q('A1.1-12', 4, R`Two random samples of $20$ students from the same school give mean heights of $165$ cm and $168$ cm. Explain why the results differ. [[2]]`,
  [R`Is either sample wrong?`, R`Different samples contain different people.`],
  [R`|B1|Natural variation between samples`, R`|B1|Each sample contains different individuals, so statistics vary from sample to sample`], R`Sampling variation`,
  R`Neither sample is wrong; random samples naturally give slightly different results.`),
Q('A1.1-13', 4, R`Describe a suitable sampling frame for a survey of Year $12$ students at a college, and give one possible problem with it. [[2]]`,
  [R`What list does the college hold?`, R`Could it be out of date?`],
  [R`|B1|E.g. the college's register of Year $12$ students`, R`|B1|E.g. may be out of date (leavers/new joiners)`], R`The Year 12 register; may be out of date`,
  R`A register lists every Year $12$ student, but it may include students who have left or miss new arrivals.`),
Q('A1.1-14', 4, R`A TV channel asks viewers to vote online on whether a programme should continue. Identify the population of interest and explain why the result may be unreliable. [[3]]`,
  [R`Whose opinion does the channel want?`, R`Who chooses to vote?`],
  [R`|B1|Population: all the programme's viewers`, R`|B1|Only people who choose to respond take part (self-selected)`, R`|B1|They may have strong views / may vote more than once, so the sample is biased`], R`Viewers; self-selected, biased`,
  R`Voluntary responses come mostly from people with strong opinions, so they don't represent typical viewers.`),
Q('A1.1-15', 5, R`A supermarket chain has $240$ stores and wants to estimate the mean weekly waste per store.

**(a)** Give one advantage and one disadvantage of a census. [[2]]

**(b)** The chain uses its list of stores to choose $30$. State the sampling frame and the sampling unit. [[2]]

**(c)** Explain how the chain could reduce the variability of its estimate, and the cost of doing so. [[2]]`,
  [R`Only $240$ stores: a census is possible.`, R`Bigger samples vary less.`],
  [R`(a)|B1|Advantage: accurate (every store included)`, R`(a)|B1|Disadvantage: time/cost of collecting data from all $240$`, R`(b)|B1|Frame: the list of stores`, R`(b)|B1|Unit: one store`, R`(c)|B1|Use a larger sample`, R`(c)|B1|But it costs more time and money`],
  R`(b) the list of stores; a store (c) larger sample, more cost`,
  R`(c) A larger sample reduces the effect of natural variation, at the cost of collecting more data.`)
]};

CONTENT['A1.2'] = {
notes: R`
### Random sampling methods
Every member has a known (usually equal) chance of being chosen.

- **Simple random sampling:** number the sampling frame and choose with random numbers (ignoring repeats and numbers out of range). Every sample of size $n$ is equally likely.
- **Systematic sampling:** choose every $k$th item from an ordered list, where $k = \frac{\text{population size}}{\text{sample size}}$, starting at a random point between $1$ and $k$.
- **Stratified sampling:** split the population into groups (strata), and sample from each group **in proportion** to its size.

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1: stratified
A sixth form has $300$ Year $12$ and $200$ Year $13$ students. Take a stratified sample of $50$.
- Year $12$: $\frac{300}{500} \times 50 = 30$. Year $13$: $\frac{200}{500} \times 50 = 20$. Then choose randomly within each year.

### Worked example 2: systematic
Choose $25$ names from a list of $500$.
- $k = \frac{500}{25} = 20$. Pick a random start from $1$ to $20$, say $13$, then take $13, 33, 53, \ldots$

**The trap:** starting at item $1$ (or $20$) every time. The start must be **random**, or it isn't a random method.

### Advantages and disadvantages
| Method | Advantages | Disadvantages |
|---|---|---|
| Simple random | free of bias; easy for small populations | needs a full sampling frame; slow for large ones |
| Systematic | simple and quick | needs a frame; biased if the list has a pattern |
| Stratified | reflects the population's structure | needs a frame and clear strata |
`,
questions: [
Q('A1.2-1', 1, R`A systematic sample of $40$ is taken from a list of $800$. Find the sampling interval. [[1]]`,
  [R`$k = \frac{N}{n}$.`, R`$\frac{800}{40}$.`],
  [R`|B1|$20$`], R`$20$`,
  R`$\frac{800}{40} = 20$: every $20$th item.`),
Q('A1.2-2', 1, R`Describe how to take a simple random sample of $20$ students from a list of $500$. [[2]]`,
  [R`Number the list.`, R`Use random numbers.`],
  [R`|B1|Number the students $1$ to $500$`, R`|B1|Use a random number generator to select $20$ different numbers (ignore repeats)`], R`Number $1$–$500$, choose $20$ random numbers`,
  R`Each student is equally likely to be chosen.`),
Q('A1.2-3', 1, R`A club has $60$ boys and $40$ girls. Find how many of each should be in a stratified sample of $20$. [[2]]`,
  [R`$\frac{60}{100} \times 20$.`, R`$\frac{40}{100} \times 20$.`],
  [R`|B1|$12$ boys`, R`|B1|$8$ girls`], R`$12$ boys, $8$ girls`,
  R`Proportional to group size: $12 + 8 = 20$.`),
Q('A1.2-4', 2, R`A firm has $150$ managers, $250$ office staff and $100$ drivers. Find the numbers of each in a stratified sample of $40$. [[2]]`,
  [R`Total $500$.`, R`Multiply each proportion by $40$.`],
  [R`|M1|$\frac{\text{group}}{500} \times 40$`, R`|A1|$12$, $20$, $8$`], R`$12$, $20$, $8$`,
  R`$\frac{150}{500} \times 40 = 12$, $\frac{250}{500} \times 40 = 20$, $\frac{100}{500} \times 40 = 8$.`),
Q('A1.2-5', 2, R`Describe how to take a systematic sample of $25$ from a list of $500$ names. [[2]]`,
  [R`$k = 20$.`, R`Random start.`],
  [R`|B1|Interval $20$`, R`|B1|Random start between $1$ and $20$, then every $20$th name`], R`Every $20$th name from a random start in $1$–$20$`,
  R`For example a start of $7$ gives names $7, 27, 47, \ldots, 487$.`),
Q('A1.2-6', 2, R`Give one advantage and one disadvantage of systematic sampling. [[2]]`,
  [R`It's simple.`, R`What if the list has a repeating pattern?`],
  [R`|B1|Advantage: simple and quick to use`, R`|B1|Disadvantage: needs a sampling frame / biased if the list has a pattern`], R`Quick; can be biased by patterns`,
  R`If, say, every $10$th house on a list is a corner house, a sample with interval $10$ could pick only those.`),
Q('A1.2-7', 2, R`Give one advantage of stratified sampling over simple random sampling. [[2]]`,
  [R`Think about groups in the population.`, R`Is each group fairly represented?`],
  [R`|B1|The sample reflects the population's structure`, R`|B1|Each group is represented in proportion`], R`It reflects the proportions of each group`,
  R`A simple random sample might, by chance, include too few of a small group; stratifying guarantees proportional representation.`),
Q('A1.2-8', 3, R`A company has $123$ staff in sales, $245$ in production and $132$ in admin. Find the numbers from each department in a stratified sample of $50$. [[3]]`,
  [R`Total $500$.`, R`Round sensibly so the total is $50$.`],
  [R`|M1|$\frac{123}{500} \times 50 = 12.3$, etc.`, R`|A1|$12$, $25$ (from $24.5$), $13$`, R`|B1|Checks the total is $50$`], R`$12$, $25$, $13$`,
  R`$12.3$, $24.5$ and $13.2$ round to $12$, $25$ and $13$, which add to $50$.`),
Q('A1.2-9', 3, R`Police check every $10$th car passing a checkpoint, starting with the $4$th. Name the sampling method and explain why it isn't simple random sampling. [[2]]`,
  [R`Every $k$th item.`, R`In simple random sampling, is every possible sample equally likely?`],
  [R`|B1|Systematic sampling`, R`|B1|Two cars next to each other can never both be chosen, so not every sample is equally likely`], R`Systematic`,
  R`Once the start is fixed, the whole sample is fixed: many combinations of cars are impossible.`),
Q('A1.2-10', 3, R`Give one disadvantage of simple random sampling for a survey of a large national population. [[2]]`,
  [R`What do you need before you can number everyone?`, R`Is that easy for a whole country?`],
  [R`|B1|Needs a complete sampling frame`, R`|B1|which is hard/expensive to obtain for a large population`], R`Needs a full frame, hard to get`,
  R`Numbering and contacting randomly chosen people across a country is slow and costly.`),
Q('A1.2-11', 3, R`A factory has $120$ full-time men, $80$ full-time women, $40$ part-time men and $160$ part-time women. Find the numbers in each group for a stratified sample of $60$. [[3]]`,
  [R`Total $400$.`, R`Each group $\times \frac{60}{400} = 0.15$.`],
  [R`|M1|Multiplies each by $0.15$`, R`|A1|$18$, $12$`, R`|A1|$6$, $24$`], R`$18$, $12$, $6$, $24$`,
  R`$120 \times 0.15 = 18$, $80 \times 0.15 = 12$, $40 \times 0.15 = 6$, $160 \times 0.15 = 24$.`),
Q('A1.2-12', 4, R`A random number generator gives $3$-digit numbers from $000$ to $999$. Explain how to use it to choose $10$ members from a numbered list of $650$. [[3]]`,
  [R`Numbers bigger than $650$?`, R`Repeats?`],
  [R`|B1|Number the members $001$ to $650$`, R`|B1|Ignore numbers above $650$ (and $000$)`, R`|B1|Ignore repeats until $10$ different members are chosen`], R`See solution`,
  R`This keeps every member equally likely to be selected.`),
Q('A1.2-13', 4, R`A researcher chooses a "random" sample by picking the first $30$ names in a phone directory. Explain whether this is a random sample. [[2]]`,
  [R`Does everyone have an equal chance?`, R`What do the first names in a directory have in common?`],
  [R`|B1|No: only people near the start of the alphabet can be chosen`, R`|B1|Most of the population has no chance of being selected`], R`Not random`,
  R`It's convenient, but people with surnames later in the alphabet have zero chance, so it isn't random.`),
Q('A1.2-14', 4, R`A systematic sample of $30$ is taken from $900$ students. The random start is $17$. Write down the first three students chosen and the last one. [[3]]`,
  [R`$k = 30$.`, R`$17 + 30n$.`],
  [R`|B1|$k = 30$`, R`|B1|$17$, $47$, $77$`, R`|B1|$887$`], R`$17$, $47$, $77$, …, $887$`,
  R`The $30$th student is $17 + 29 \times 30 = 887$.`),
Q('A1.2-15', 5, R`A school has $480$ students in KS3, $360$ in KS4 and $160$ in the sixth form. A survey of $50$ students is planned.

**(a)** Find the number from each key stage for a stratified sample. [[2]]

**(b)** Explain how the KS4 students should be chosen. [[2]]

**(c)** Give one advantage of stratified sampling here. [[1]]

**(d)** A teacher suggests choosing every $20$th student from an alphabetical list of the whole school instead. Name this method and give one disadvantage. [[2]]`,
  [R`Total $1000$; multiply by $0.05$.`, R`Within each stratum, choose randomly.`],
  [R`(a)|M1|Multiplies by $\frac{50}{1000}$`, R`(a)|A1|$24$, $18$, $8$`, R`(b)|B1|Number the KS4 students $1$ to $360$`, R`(b)|B1|Choose $18$ using random numbers`, R`(c)|B1|Each key stage is represented in proportion`, R`(d)|B1|Systematic sampling`, R`(d)|B1|E.g. the key stages may not be represented in proportion`],
  R`(a) $24$, $18$, $8$ (d) systematic`,
  R`(a) $480 \times 0.05 = 24$, $360 \times 0.05 = 18$, $160 \times 0.05 = 8$.

(d) An alphabetical list ignores year groups, so by chance some key stages could be over- or under-represented.`)
]};

CONTENT['A1.3'] = {
notes: R`
### Non-random sampling
- **Quota sampling:** the interviewer selects people to fill set numbers (quotas) from each group, e.g. $20$ men and $30$ women.
- **Opportunity (convenience) sampling:** use whoever is available at the time who fits the criteria.

| Method | Advantages | Disadvantages |
|---|---|---|
| Quota | no sampling frame needed; quick; represents the groups | not random, so open to interviewer bias; non-responses are just replaced |
| Opportunity | very easy and cheap | unlikely to be representative; highly dependent on the researcher |

::: booklet
**Not in the formula booklet:** these methods.
:::

### Worked example 1
A market researcher must interview $40$ adults: $20$ aged under $40$ and $20$ aged $40$ or over. Name the method and give one disadvantage.
- Quota sampling. The interviewer chooses who to approach, so the sample may be biased (e.g. only friendly-looking people).

### Worked example 2: opportunity sampling
A student asks the first $30$ people leaving a gym whether they exercise regularly, to estimate how many adults in the town exercise regularly.
- It's an opportunity sample, and very biased: gym users are much more likely to exercise than the general population.

**The trap:** calling quota sampling "stratified". Both use groups, but in quota sampling the individuals within each group are **not** chosen at random.

### Watch out
- Non-random methods are useful when there's no sampling frame.
`,
questions: [
Q('A1.3-1', 1, R`Name the sampling method in which an interviewer must find set numbers of people from different groups. [[1]]`,
  [R`It fills quotas.`, R`Not random.`],
  [R`|B1|Quota sampling`], R`Quota sampling`,
  R`The interviewer keeps choosing people until each group's quota is filled.`),
Q('A1.3-2', 1, R`What is meant by opportunity sampling? [[1]]`,
  [R`Who is chosen?`, R`Whoever is available.`],
  [R`|B1|Taking the sample from people available at the time who fit the criteria`], R`Using whoever is available`,
  R`For example, asking the people you happen to meet in a corridor.`),
Q('A1.3-3', 1, R`Give one advantage of opportunity sampling. [[1]]`,
  [R`Think about effort and cost.`, R`It's the easiest method.`],
  [R`|B1|Easy to carry out / cheap / quick`], R`Easy and cheap`,
  R`It needs no sampling frame and no random selection.`),
Q('A1.3-4', 2, R`Give one advantage and one disadvantage of quota sampling. [[2]]`,
  [R`Does it need a list?`, R`Who decides who is interviewed?`],
  [R`|B1|Advantage: no sampling frame needed / quick / groups represented`, R`|B1|Disadvantage: not random, so interviewer bias is possible`], R`No frame needed; interviewer bias`,
  R`The quotas ensure groups are represented, but the choice within each group is up to the interviewer.`),
Q('A1.3-5', 2, R`A student asks the first $30$ people leaving a gym whether they exercise regularly, to estimate the proportion of adults in the town who do. Identify the method and explain why it is biased. [[2]]`,
  [R`Who is available?`, R`Are gym users typical?`],
  [R`|B1|Opportunity sampling`, R`|B1|People leaving a gym are more likely to exercise than adults in general`], R`Opportunity; gym-goers over-represent exercisers`,
  R`The estimate would be far too high.`),
Q('A1.3-6', 2, R`Explain one difference between quota sampling and stratified sampling. [[2]]`,
  [R`Both use groups.`, R`How are individuals chosen within a group?`],
  [R`|B1|In stratified sampling, members of each stratum are chosen at random`, R`|B1|In quota sampling, the interviewer chooses them (not random)`], R`Random within strata vs interviewer's choice`,
  R`Stratified sampling is a random method; quota sampling is not.`),
Q('A1.3-7', 2, R`Why might a researcher use quota sampling rather than stratified sampling for a street survey? [[2]]`,
  [R`What does stratified sampling need?`, R`Is there a list of people walking down a street?`],
  [R`|B1|No sampling frame is available`, R`|B1|Quota sampling doesn't need one`], R`No sampling frame is available`,
  R`You can't randomly select from people in the street without a list of them.`),
Q('A1.3-8', 3, R`A researcher must interview $50$ shoppers: $30$ women and $20$ men. Identify the sampling method and explain one source of bias. [[2]]`,
  [R`Set numbers in each group.`, R`Who chooses the shoppers?`],
  [R`|B1|Quota sampling`, R`|B1|The researcher may pick people who look approachable, so the sample isn't random`], R`Quota; interviewer bias`,
  R`Interviewer choice can easily skew the sample (age, appearance, location).`),
Q('A1.3-9', 3, R`In quota sampling, what happens when someone refuses to take part, and why is this a disadvantage? [[2]]`,
  [R`The quota still needs filling.`, R`Are refusers similar to people who agree?`],
  [R`|B1|They are simply replaced with someone else`, R`|B1|People who refuse may differ from those who agree, causing bias`], R`Replaced; non-response bias`,
  R`Replacing non-responders hides the fact that some kinds of people are missing.`),
Q('A1.3-10', 3, R`A teacher surveys the students in her own class about homework, to estimate the views of the whole school. Name the method and give two reasons the results may not represent the school. [[3]]`,
  [R`Who is easily available?`, R`Is one class typical?`],
  [R`|B1|Opportunity sampling`, R`|B1|One class is one year group / one subject`, R`|B1|Students may answer to please their teacher`], R`Opportunity; one class, response bias`,
  R`A single class has a narrow range of ages and experiences, and students may not be honest with their own teacher.`),
Q('A1.3-11', 3, R`State whether each method is random or non-random: **(a)** systematic **(b)** quota **(c)** stratified **(d)** opportunity. [[2]]`,
  [R`Is chance used to select individuals?`, R`Two are random, two are not.`],
  [R`(a)|B1|random, (c) random`, R`(b)|B1|non-random, (d) non-random`], R`(a), (c) random; (b), (d) non-random`,
  R`Systematic (random start) and stratified (random within strata) use chance; quota and opportunity do not.`),
Q('A1.3-12', 4, R`A charity wants to survey $100$ of its volunteers: $40$ aged under $30$ and $60$ aged $30$ or over. It has a complete list of volunteers with their ages. Recommend a sampling method, with a reason. [[2]]`,
  [R`A sampling frame is available.`, R`Random is better than non-random.`],
  [R`|B1|Stratified sampling (by age group)`, R`|B1|A sampling frame exists, so a random method avoids bias while keeping the age proportions`], R`Stratified sampling`,
  R`Since there's a list, choosing randomly within each age group is possible and avoids the bias of quota sampling.`),
Q('A1.3-13', 4, R`A journalist stands outside a railway station and interviews $25$ commuters about public transport. Explain whether the sample is likely to represent the views of all the town's residents. [[2]]`,
  [R`Who uses the station?`, R`Who doesn't?`],
  [R`|B1|Opportunity sample of rail users only`, R`|B1|Car drivers, bus users and non-commuters are missed, so not representative`], R`Not representative`,
  R`Rail commuters' views on transport are likely to differ from those of residents who never use the train.`),
Q('A1.3-14', 4, R`Explain why quota sampling may be preferred to simple random sampling when results are needed quickly. [[2]]`,
  [R`What does simple random sampling need?`, R`What happens if a randomly chosen person can't be found?`],
  [R`|B1|No sampling frame is needed`, R`|B1|Non-responders are replaced on the spot, so data collection is fast`], R`No frame; fast`,
  R`In simple random sampling, every chosen person must be traced; with quotas, the interviewer simply moves on to someone else.`),
Q('A1.3-15', 5, R`A council wants opinions on a new leisure centre from residents aged $18$–$40$, $41$–$65$ and over $65$, in the ratio of their numbers in the town ($5 : 4 : 3$). It plans to interview $120$ people.

**(a)** Find the quota for each age group. [[2]]

**(b)** Give one advantage of quota sampling here. [[1]]

**(c)** The interviews take place in the shopping centre on weekday mornings. Explain one likely source of bias. [[2]]

**(d)** Suggest an improvement that uses the council's electoral register. [[2]]`,
  [R`$120 \div 12 = 10$ per part.`, R`Who shops on weekday mornings?`],
  [R`(a)|M1|$120 \div 12 = 10$`, R`(a)|A1|$50$, $40$, $30$`, R`(b)|B1|E.g. no sampling frame needed; quick; age groups represented`, R`(c)|B1|Weekday-morning shoppers exclude most people in work`, R`(c)|B1|So the views of working residents are under-represented`, R`(d)|B1|Use the register as a sampling frame`, R`(d)|B1|Take a stratified random sample by age group`],
  R`(a) $50$, $40$, $30$`,
  R`(a) $5 \times 10$, $4 \times 10$, $3 \times 10$.

(d) The electoral register lists adult residents, so the council could choose randomly within each age group.`)
]};

CONTENT['A1.4'] = {
notes: R`
### Types of data
- **Qualitative** (categorical): described in words, e.g. eye colour.
- **Quantitative**: numerical.
  - **Discrete:** can only take particular values, e.g. number of children.
  - **Continuous:** can take any value in a range, e.g. height, time.

### Grouped data
Large data sets are often grouped into classes.
- **Class boundaries:** where one class ends and the next begins.
- **Class width** $=$ upper boundary $-$ lower boundary.
- **Midpoint** $= \frac12$(lower boundary $+$ upper boundary).

::: booklet
**Not in the formula booklet:** these definitions.
:::

### Worked example 1
Classify: **(a)** shoe size **(b)** mass **(c)** favourite sport.
- (a) Quantitative, discrete. (b) Quantitative, continuous. (c) Qualitative.

### Worked example 2: boundaries for rounded data
Ages are grouped as $10$–$19$, $20$–$29$, … years. Find the class boundaries and width of the class $10$–$19$.
- Age is "years completed", so $10$–$19$ means $10 \le \text{age} < 20$: boundaries $10$ and $20$, width $10$.
- If instead **lengths** are recorded to the nearest cm in a class $10$–$19$, the boundaries are $9.5$ and $19.5$.

**The trap:** always using $\pm0.5$. Think about how the data were recorded: ages are rounded **down**.

### Watch out
- Midpoints are found from the **boundaries**, not the stated class limits.
`,
questions: [
Q('A1.4-1', 1, R`State whether each variable is qualitative or quantitative: **(a)** hair colour **(b)** number of pets. [[1]]`,
  [R`Words or numbers?`, R`Hair colour is a word.`],
  [R`(a)|B1|qualitative (b) quantitative`], R`(a) qualitative (b) quantitative`,
  R`Hair colour is described by words; number of pets is a count.`),
Q('A1.4-2', 1, R`State whether each is discrete or continuous: **(a)** time to run $100$ m **(b)** goals scored. [[1]]`,
  [R`Can it take any value?`, R`Goals are counted.`],
  [R`(a)|B1|continuous (b) discrete`], R`(a) continuous (b) discrete`,
  R`Time can take any value in a range; goals come in whole numbers.`),
Q('A1.4-3', 1, R`Explain the difference between discrete and continuous data. [[1]]`,
  [R`Particular values versus any value.`, R`Counting versus measuring.`],
  [R`|B1|Discrete: only particular values; continuous: any value in a range`], R`See solution`,
  R`Discrete data are usually counted; continuous data are measured.`),
Q('A1.4-4', 2, R`Lengths, recorded to the nearest cm, are grouped as $10$–$14$, $15$–$19$, $20$–$24$. Find the boundaries, width and midpoint of the class $15$–$19$. [[2]]`,
  [R`Nearest cm: boundaries half a unit beyond the limits.`, R`$14.5$ and $19.5$.`],
  [R`|B1|Boundaries $14.5$ and $19.5$`, R`|B1|Width $5$, midpoint $17$`], R`$14.5$, $19.5$; width $5$; midpoint $17$`,
  R`Midpoint $\frac{14.5 + 19.5}{2} = 17$.`),
Q('A1.4-5', 2, R`Ages are grouped as $10$–$19$, $20$–$29$, … years. Find the class boundaries, width and midpoint of the class $20$–$29$. [[2]]`,
  [R`Ages are rounded down.`, R`$20 \le$ age $< 30$.`],
  [R`|B1|Boundaries $20$ and $30$`, R`|B1|Width $10$, midpoint $25$`], R`$20$, $30$; width $10$; midpoint $25$`,
  R`Someone aged $29$ could be $29$ years and $11$ months, so the class runs up to $30$.`),
Q('A1.4-6', 2, R`Masses are given in classes $50 \le m < 55$, $55 \le m < 65$. Find the width and midpoint of each class. [[2]]`,
  [R`Width = upper $-$ lower.`, R`Midpoint = average of boundaries.`],
  [R`|B1|$5$ and $10$`, R`|B1|$52.5$ and $60$`], R`Widths $5$, $10$; midpoints $52.5$, $60$`,
  R`The boundaries are given directly by the inequalities.`),
Q('A1.4-7', 2, R`Classify each as qualitative, discrete or continuous: **(a)** daily rainfall in mm **(b)** cloud cover in oktas (whole eighths of the sky) **(c)** wind direction given as a compass point. [[3]]`,
  [R`Rainfall is measured.`, R`Oktas are whole numbers $0$–$8$.`],
  [R`(a)|B1|continuous`, R`(b)|B1|discrete`, R`(c)|B1|qualitative`], R`(a) continuous (b) discrete (c) qualitative`,
  R`Compass points (N, NE, …) are categories, not numbers.`),
Q('A1.4-8', 3, R`Times are recorded to the nearest second and grouped as $30$–$39$, $40$–$49$. Find the boundaries and width of $40$–$49$. [[2]]`,
  [R`Nearest second.`, R`$39.5$ and $49.5$.`],
  [R`|B1|$39.5$ and $49.5$`, R`|B1|Width $10$`], R`$39.5$, $49.5$; width $10$`,
  R`A time of $39.6$ s rounds to $40$, so belongs to $40$–$49$.`),
Q('A1.4-9', 3, R`Give one advantage and one disadvantage of grouping data. [[2]]`,
  [R`It's easier to read.`, R`What is lost?`],
  [R`|B1|Advantage: easier to summarise/display large data sets`, R`|B1|Disadvantage: the exact values are lost, so calculations are estimates`], R`Easier to read; loses detail`,
  R`With grouped data we only know the class of each value, not the value itself.`),
Q('A1.4-10', 3, R`A class has boundaries $2.5$ and $7.5$. Find its width and midpoint, and suggest how its values might have been recorded. [[3]]`,
  [R`Width $5$, midpoint $5$.`, R`Boundaries at $.5$ suggest rounding to whole numbers.`],
  [R`|B1|Width $5$`, R`|B1|Midpoint $5$`, R`|B1|Rounded to the nearest whole number (class $3$–$7$)`], R`Width $5$, midpoint $5$; class $3$–$7$`,
  R`Values from $2.5$ up to $7.5$ round to $3, 4, 5, 6, 7$.`),
Q('A1.4-11', 3, R`A survey records the number of people in each car passing a junction. Is this discrete or continuous? Could it be shown in classes $1$–$2$, $3$–$4$, $5$–$6$? Give the class boundaries of $3$–$4$. [[3]]`,
  [R`People are counted.`, R`For discrete data, boundaries are often placed halfway between the classes.`],
  [R`|B1|Discrete`, R`|B1|Yes, classes can be used`, R`|B1|$2.5$ and $4.5$`], R`Discrete; $2.5$ and $4.5$`,
  R`The gap between $2$ and $3$ is split at $2.5$, and between $4$ and $5$ at $4.5$.`),
Q('A1.4-12', 4, R`Heights in classes $150$–$159$, $160$–$164$, $165$–$179$ cm (to the nearest cm). Find each class width. [[2]]`,
  [R`Boundaries $149.5, 159.5, 164.5, 179.5$.`, R`Subtract.`],
  [R`|M1|Uses boundaries`, R`|A1|$10$, $5$, $15$`], R`$10$, $5$, $15$`,
  R`$159.5 - 149.5 = 10$, $164.5 - 159.5 = 5$, $179.5 - 164.5 = 15$.`),
Q('A1.4-13', 4, R`Explain why a person's age in years is usually treated as continuous, even though it's recorded as a whole number. [[2]]`,
  [R`Does age change continuously?`, R`How is it recorded?`],
  [R`|B1|Age increases continuously with time`, R`|B1|The whole-number record is just a rounded-down value`], R`See solution`,
  R`Someone "aged $16$" can be anywhere from $16$ up to (not including) $17$.`),
Q('A1.4-14', 4, R`A frequency table has classes $0 \le t < 5$, $5 \le t < 10$, $10 \le t < 20$ with frequencies $8$, $12$, $6$. Find an estimate of the mean of $t$. [[3]]`,
  [R`Use midpoints $2.5$, $7.5$, $15$.`, R`$\frac{\sum fx}{\sum f}$.`],
  [R`|B1|Midpoints $2.5$, $7.5$, $15$`, R`|M1|$\frac{20 + 90 + 90}{26}$`, R`|A1|$7.69$`], R`$7.69$`,
  R`$\sum fx = 20 + 90 + 90 = 200$, $\sum f = 26$, mean $\approx 7.69$. (Only an estimate, since exact values are unknown.)`),
Q('A1.4-15', 5, R`Daily maximum gust (in knots, to the nearest knot) is grouped: $10$–$19$: $14$ days; $20$–$29$: $25$ days; $30$–$44$: $9$ days.

**(a)** Is the variable discrete or continuous? [[1]]

**(b)** Find the class boundaries and widths. [[3]]

**(c)** Estimate the mean gust speed. [[3]]`,
  [R`Recorded to the nearest knot: boundaries at $.5$.`, R`Midpoints $14.5$, $24.5$, $37$.`],
  [R`(a)|B1|Continuous`, R`(b)|B1|$9.5$–$19.5$, $19.5$–$29.5$, $29.5$–$44.5$`, R`(b)|B1|Widths $10$, $10$`, R`(b)|B1|Width $15$`, R`(c)|B1|Midpoints $14.5$, $24.5$, $37$`, R`(c)|M1|$\frac{14(14.5) + 25(24.5) + 9(37)}{48}$`, R`(c)|A1|$23.9$ knots`],
  R`(a) continuous (c) $23.9$ knots`,
  R`(c) $\frac{203 + 612.5 + 333}{48} = \frac{1148.5}{48} = 23.9$.`)
]};

CONTENT['A1.5'] = {
notes: R`
### The Edexcel large data set
The large data set is **weather data** from the Met Office for eight weather stations:
- **UK:** Camborne, Heathrow, Hurn, Leeming and Leuchars
- **Overseas:** Beijing, Jacksonville and Perth

It covers **May to October** in **1987** and **2015**.

### Variables you need to know
- Daily mean temperature (°C) and daily total rainfall (mm)
- Daily total sunshine (hours)
- Daily mean windspeed and maximum gust (knots), with wind direction
- Daily maximum relative humidity (%)
- Daily mean cloud cover (**oktas**: eighths of the sky covered)
- Daily mean visibility and pressure

### Things to watch
- "**tr**" means a **trace** of rain (less than $0.05$ mm).
- "**n/a**" means the data are **not available**; leave those days out.
- Perth is in the southern hemisphere, so May–October is its **winter**.
- The Beaufort scale describes windspeeds in words (e.g. "light", "moderate").

::: booklet
**Not in the formula booklet:** these facts. You need to be familiar with the data set itself.
:::

### Worked example 1
Explain how to deal with "tr" when calculating mean rainfall.
- Treat it as $0$ (it's less than $0.05$ mm), and say that you have.

### Worked example 2: context matters
A student says "the mean temperature in Perth in the large data set is lower than in Heathrow, so Perth is a colder place." Comment.
- The data run from May to October: winter in Perth but summer in Heathrow. The comparison is about different seasons.

**The trap:** forgetting the time period and location when interpreting. Always link conclusions to the context.

### Watch out
- When sampling from the data set, days with "n/a" must be replaced or excluded.
`,
questions: [
Q('A1.5-1', 1, R`In the large data set, what does "tr" mean in the rainfall column? [[1]]`,
  [R`It's short for a word.`, R`A very small amount.`],
  [R`|B1|Trace: less than $0.05$ mm of rain`], R`A trace (less than $0.05$ mm)`,
  R`"tr" records rainfall too small to measure.`),
Q('A1.5-2', 1, R`What does "n/a" mean in the large data set? [[1]]`,
  [R`Two words.`, R`Missing data.`],
  [R`|B1|Not available`], R`Not available`,
  R`The data for that day weren't recorded or aren't available.`),
Q('A1.5-3', 1, R`Which months of the year does the large data set cover? [[1]]`,
  [R`Six months.`, R`Starting in late spring.`],
  [R`|B1|May to October`], R`May to October`,
  R`The data run from May to October, in 1987 and 2015.`),
Q('A1.5-4', 2, R`Cloud cover is measured in oktas. Explain what an okta is, and state whether cloud cover in oktas is discrete or continuous. [[2]]`,
  [R`It's a fraction of the sky.`, R`Whole numbers from $0$ to $8$.`],
  [R`|B1|One okta is one eighth of the sky covered by cloud`, R`|B1|Discrete (whole numbers $0$–$8$)`], R`One eighth of the sky; discrete`,
  R`$0$ oktas is a clear sky; $8$ oktas is completely overcast. (Daily means can be fractional, but each reading is a whole number.)`),
Q('A1.5-5', 2, R`Name the five UK weather stations in the large data set. [[2]]`,
  [R`Two are in southern England.`, R`One is in Scotland.`],
  [R`|B1|Any three of Camborne, Heathrow, Hurn, Leeming, Leuchars`, R`|B1|All five`], R`Camborne, Heathrow, Hurn, Leeming, Leuchars`,
  R`The overseas stations are Beijing, Jacksonville and Perth.`),
Q('A1.5-6', 2, R`A student finds "tr" on $6$ of $31$ days. Explain how they should treat these values when finding the mean daily rainfall, and why. [[2]]`,
  [R`How much rain is a trace?`, R`It's almost nothing.`],
  [R`|B1|Treat "tr" as $0$`, R`|B1|because a trace is less than $0.05$ mm, which is negligible`], R`Treat as $0$`,
  R`Treating them as $0$ makes little difference to the mean, and the student should state the assumption.`),
Q('A1.5-7', 2, R`Explain why mean temperatures for Perth in the large data set may be lower than for Jacksonville. [[2]]`,
  [R`Which hemisphere is Perth in?`, R`Which season do May–October fall in there?`],
  [R`|B1|Perth is in the southern hemisphere`, R`|B1|So May–October is its winter, while it's summer in Jacksonville`], R`Perth's data are from its winter`,
  R`The comparison is between different seasons, not just different places.`),
Q('A1.5-8', 3, R`Give one reason why a sample from the large data set might contain fewer than the intended number of usable days. [[2]]`,
  [R`Some entries are missing.`, R`What happens to "n/a" days?`],
  [R`|B1|Some days have "n/a" for the variable`, R`|B1|Those days must be excluded (or replaced)`], R`Missing ("n/a") values`,
  R`If a chosen day has no data for the variable, it can't be used.`),
Q('A1.5-9', 3, R`Describe how to take a systematic sample of $20$ days from the $184$ days (May–October) for one station in $2015$. [[3]]`,
  [R`$\frac{184}{20} = 9.2$.`, R`Use an interval of $9$ with a random start.`],
  [R`|B1|Number the days $1$ to $184$`, R`|B1|Interval $9$`, R`|B1|Random start from $1$ to $9$, then every $9$th day`], R`Every $9$th day from a random start in $1$–$9$`,
  R`$184 \div 20 = 9.2$, so an interval of $9$ gives at least $20$ days; stop after $20$.`),
Q('A1.5-10', 3, R`Windspeed is recorded in knots. Daily mean windspeed values are given as whole numbers. Is the variable discrete or continuous? Explain. [[2]]`,
  [R`Can windspeed take any value?`, R`It's just rounded for recording.`],
  [R`|B1|Continuous`, R`|B1|Speed can take any value; the data are rounded`], R`Continuous`,
  R`Rounding a continuous measurement doesn't make it discrete.`),
Q('A1.5-11', 3, R`A student wants to compare rainfall at Leuchars in 1987 and 2015. Suggest a suitable sampling method and give one reason. [[2]]`,
  [R`A complete list of days exists.`, R`A random method avoids bias.`],
  [R`|B1|E.g. simple random sampling of days from each year`, R`|B1|A sampling frame (the list of dates) exists, so a random method is possible and avoids bias`], R`Simple random (or systematic) sampling`,
  R`Each year has the same $184$ dates, so the same method can be used for both.`),
Q('A1.5-12', 4, R`A student uses only the first $10$ days of May at Heathrow to estimate the mean daily temperature for May–October. Explain why this is unreliable. [[2]]`,
  [R`What happens to temperature through the summer?`, R`Is the start of May typical?`],
  [R`|B1|Opportunity/convenience sample, not random`, R`|B1|Early May is cooler than mid-summer, so the mean would be too low`], R`Unrepresentative: early May is cooler`,
  R`Temperatures rise through June–August; a sample from early May misses that.`),
Q('A1.5-13', 4, R`Give one reason why the daily maximum relative humidity is likely to be high on a day with a lot of rain. [[1]]`,
  [R`What happens to the air when it rains?`, R`Moisture.`],
  [R`|B1|Rain is associated with very moist air, so humidity is high`], R`Rain means moist air`,
  R`Relative humidity measures how close the air is to being saturated with water vapour; rain usually happens when the air is close to saturation.`),
Q('A1.5-14', 4, R`A student says that because the mean windspeed at Leeming in 2015 was higher than in 1987, it is windier there now. Give two criticisms of this conclusion. [[2]]`,
  [R`Is one year enough?`, R`Which months are included?`],
  [R`|B1|Only two years: natural year-to-year variation`, R`|B1|Only May–October, so nothing about the rest of the year`], R`Two years only; only part of the year`,
  R`Two single years can't show a long-term trend, and winter months aren't included.`),
Q('A1.5-15', 5, R`A student takes a sample of $15$ days from Hurn in 2015 to estimate the mean daily total rainfall.

**(a)** Five of the days show "tr". Explain how the student should treat these. [[1]]

**(b)** Two of the days show "n/a". Explain what the student should do. [[2]]

**(c)** Give one reason why a sample of $15$ days may give a poor estimate. [[1]]

**(d)** Suggest a better sampling method and explain why it is better. [[2]]`,
  [R`"tr" is less than $0.05$ mm.`, R`Rainfall varies a lot from day to day.`],
  [R`(a)|B1|Treat as $0$`, R`(b)|B1|Remove them`, R`(b)|B1|and choose replacement days at random (or note the smaller sample)`, R`(c)|B1|Small sample; rainfall is very variable (many dry days, a few very wet)`, R`(d)|B1|E.g. a larger random/systematic sample, or stratified by month`, R`(d)|B1|Reduces variability / ensures all months are represented`],
  R`(a) as $0$ (b) exclude and replace`,
  R`(c) A few heavy downpours can dominate a small sample.

(d) Stratifying by month means each part of the season contributes, giving a more representative estimate.`)
]};
