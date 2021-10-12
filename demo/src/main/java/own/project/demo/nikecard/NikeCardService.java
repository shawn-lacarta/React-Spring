package own.project.demo.nikecard;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NikeCardService {
    private NikeCardRepository nikeCardRepository;

    public NikeCardService(NikeCardRepository nikeCardRepository) {
        this.nikeCardRepository = nikeCardRepository;
    }

    public NikeCard findById(Integer id) {
        Optional<NikeCard> nikeCard = nikeCardRepository.findById(id);
        return nikeCard.orElse(null);
    }

    public NikeCard postNikeCard(NikeCard nikeCard){
        return nikeCardRepository.save(nikeCard);
    }

    public List<NikeCard> getAllNikeCard(){
        return nikeCardRepository.findAll();
    }

    public void deleteNikeCard(Integer id){
        nikeCardRepository.deleteById(id);
    }
}
