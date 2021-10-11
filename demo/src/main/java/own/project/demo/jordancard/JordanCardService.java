package own.project.demo.jordancard;

import java.util.List;
import java.util.Optional;

public class JordanCardService {
    private JordanCardRepository jordanCardRepository;

    public JordanCardService(JordanCardRepository jordanCardRepository) {
        this.jordanCardRepository = jordanCardRepository;
    }

    public JordanCard findById(Integer id) {
        Optional<JordanCard> jordanCard = jordanCardRepository.findById(id);
        return jordanCard.orElse(null);
    }

    public JordanCard postJordanCard(JordanCard jordanCard) {
        return jordanCardRepository.save(jordanCard);
    }

    public List<JordanCard> getAllJordanCard() {
        return jordanCardRepository.findAll();
    }

    public void deleteJordanCard(Integer id) {
        jordanCardRepository.deleteById(id);
    }
}
