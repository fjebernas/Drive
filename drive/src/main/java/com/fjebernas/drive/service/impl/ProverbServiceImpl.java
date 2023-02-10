package com.fjebernas.drive.service.impl;

import com.fjebernas.drive.model.Proverb;
import com.fjebernas.drive.repository.ProverbRepository;
import com.fjebernas.drive.service.ProverbService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProverbServiceImpl implements ProverbService {

  private final ProverbRepository proverbRepository;

  public ProverbServiceImpl(ProverbRepository proverbRepository) {
    this.proverbRepository = proverbRepository;
  }

  @Override
  public List<Proverb> getAll() {
    return proverbRepository.findAll();
  }

  @Override
  public Proverb getById(Long id) {
    return proverbRepository.findById(id).orElseThrow();
  }

  @Override
  public Proverb store(Proverb proverb) throws Exception {
    if (proverbRepository.existsProverbByContent(proverb.getContent())) {
      throw new Exception("Proverb with content: \"" + proverb.getContent() + "\" already exists.");
    } else {
      return proverbRepository.save(proverb);
    }
  }

  @Override
  public void destroy(Long id) {
    proverbRepository.deleteById(id);
  }
}
