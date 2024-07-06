DIAGRAM_DIR=$(shell pwd)

# make to/pdf input=team.md output=team.pdf
.PHONY: to/pdf
to/pdf:
	@docker run --rm -u `id -u`:`id -g` -v $(DIAGRAM_DIR)/mermaid:/data minlag/mermaid-cli -i /data/${filename}.md -o /data/${filename}.pdf

# make to/pdf input=team.md output=team.svg
.PHONY: to/svg
to/pdf:
	@docker run --rm -u `id -u`:`id -g` -v $(DIAGRAM_DIR)/mermaid:/data minlag/mermaid-cli -i /data/${filename}.md -o /data/${filename}.pdf

# make to/md input=team.md output=team2.md
.PHONY: to/graph
to/graph:
	@docker run --rm -u `id -u`:`id -g` -v $(DIAGRAM_DIR)/mermaid:/data minlag/mermaid-cli -i /data/${input} -o /data/${output}