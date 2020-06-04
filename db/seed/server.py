from collections import Counter, defaultdict
import random
import gzip
import textwrap

def make_trigrams(filename):
    with open(filename) as f: words = f.read().split()
    trigrams = defaultdict(list)
    bigram = tuple(words[:2])
    startwords = [bigram]
    for w in words[2:] + words[:2]:
        trigrams[bigram].append(w)
        if (bigram[0].endswith('.') or bigram[0].endswith('!') or bigram[0].endswith('?')) and bigram[1][0].isupper():
            startwords.append((bigram[1], w))
        bigram = (bigram[1], w)
    return trigrams,startwords

def random_text(trigrams, startwords, num_words = 10):
    current_pair = random.choice(startwords)
    random_text = list(current_pair)
    while len(random_text) < num_words or not (random_text[-1].endswith('.') or random_text[-1].endswith('!') or random_text[-1].endswith('?')):
        next = random.choice(trigrams[current_pair])
        random_text.append(next)
        current_pair = (current_pair[1], next)
        if len(random_text) > 4 * num_words: random_text[-1] += '...'
    return textwrap.fill(' '.join(random_text), width = 140)

tri_lego, start_lego = make_trigrams('./db/seed/lego.reviews.txt')

while True:
    try:
        input()
        print(random_text(tri_lego, start_lego))
    except:
        exit()
